module.exports = {
    PORT: process.env.PORT,
    APP_NAME: process.env.APP_NAME,
    NODE_ENV: process.env.NODE_ENV,
    SECRET: process.env.SECRET,
    ENVIRONMENT: process.env.NODE_ENV === 'prod' ? 'prod' : 'dev',
    IS_PRODUCTION: process.env.NODE_ENV === 'prod',
};