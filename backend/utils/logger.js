const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;


const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});
//const logger 
module.exports = createLogger({
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console({
            level: 'debug',
            format: format.combine(
                format.colorize({
                    all: true
                })
            )
        }),
        new transports.File({
            level:'info',
            filename: `${__dirname}/../logs/log-de-aplicacion.log`
        })
    ]
});