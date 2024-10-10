import wins from 'winston';

export const logger = wins.createLogger({
    level: 'info',
    format: wins.format.json(),
    transports: [
        new wins.transports.Console(),
    ]
})