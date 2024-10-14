# Setup Project

Create .env file

```env
DATABASE_URL="postgres://<user>:<password>@<host>:<port>"
```

```shell
npm install

npx prisma db push

npx prisma generate

npm run build

npm run start
 ```