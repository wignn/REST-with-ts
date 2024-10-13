import { logger } from "../src/application/loggin";
import { web } from "./../src/application/web";
import supertest from "supertest";
import { userTest } from "./test-util";
import bcrypt from "bcrypt";

describe("POST /api/users", () => {
  it("should reject register new user if request is invali", async () => {
    const response = await supertest(web).post("/api/users").send({
      username: "",
      password: "",
      email: "",
      name: "",
    });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body).toBeDefined();
  });
});

describe("POST /api/users", () => {
  afterEach(async () => {
    await userTest.delete();
  });

  it("should register new user if request is valid", async () => {
    const response = await supertest(web).post("/api/users").send({
      username: "test",
      password: "password",
      name: "test",
      email: "test@example.com",
    });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.data.name).toBe("test");
    expect(response.body.data.username).toBe("test");
    expect(response.body.data.email).toBe("test@example.com");
  });
});

describe("POST /api/users/login", () => {
  beforeEach(async () => {
    await userTest.create();
  });
  it("should be able to login", async () => {
    const response = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "test",
    });

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.data.name).toBe("test");
    expect(response.body.data.username).toBe("test");
    expect(response.body.data.token).toBeDefined();
  });

  afterEach(async () => {
    await userTest.delete();
  });
});

describe("GET /api/users/current", () => {
  beforeEach(async () => {
    await userTest.create();
  });
  afterEach(async () => {
    await userTest.delete();
  });

  it("should be able to get current user", async () => {
    const response = await supertest(web)
      .get("/api/users/current")
      .set("X-API-TOKEN", "test");
    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.username).toBe("test");
    expect(response.body.data.name).toBe("test");
  });

  it("should reject if token invalid", async () => {
    const response = await supertest(web)
      .get("/api/users/current")
      .set("X-API-TOKEN", "salah");
    logger.debug(response.body);
    expect(response.status).toBe(401);
    expect(response.body.errors).toBe("Unauthorized");
  });
});

describe("PATCH /api/users/current", () => {
  beforeEach(async () => {
    await userTest.create();
  });

  afterEach(async () => {
    await userTest.delete();
  });

  it("should be reject to update current user", async () => {
    const response = await supertest(web)
      .patch("/api/users/current")
      .set("X-API-TOKEN", "test")
      .send({
        name: "test",
        password: "",
      });
    logger.debug(response.body);
    expect(response.status).toBe(400);
  });

  it("should be reject to update if token is wrong", async () => {
    const response = await supertest(web)
      .patch("/api/users/current")
      .set("X-API-TOKEN", "salah")
      .send({
        name: "benar",
        password: "benar",
      });

    logger.debug(response.body);
    expect(response.status).toBe(401);
    expect(response.body.errors).toBeDefined();
  });

  it("should be able to update current user", async () => {
    const response = await supertest(web)
      .patch("/api/users/current")
      .set("X-API-TOKEN", "test")
      .send({name: "benar", password: "benar"});
    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.name).toBe("benar");
    const user = await userTest.get();
    expect(await bcrypt.compare("benar", user.password)).toBe(true);
  });
});

describe("DELETE /api/users/current", () => {
  beforeEach(async () => {
    await userTest.create();
  });

  afterEach(async () => {
    await userTest.delete();
  });
  it("should be able to logout", async () => {
    const response = await supertest(web)
      .delete("/api/users/current")
      .set("X-API-TOKEN", "test");

    logger.debug(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
    const user = await userTest.get();
    expect(user.token).toBeNull();
  });

  it("should be reject if token is wrong", async () => {
    const response = await supertest(web)
      .delete("/api/users/current")
      .set("X-API-TOKEN", "salah");

    logger.debug(response.body);
    expect(response.status).toBe(401);
    expect(response.body.errors).toBeDefined();
  });
});
