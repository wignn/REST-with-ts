import { logger } from "./application/loggin";
import { web } from "./application/web";

web.listen(3000, () => {
    logger.info('Server is running on port 3000');

})

export default web;