export default () => ({
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  accessSecretKey: process.env.ACCESS_SECRET_KEY,
  accessTokenExpires: process.env.ACCESS_TOKEN_EXPIRES,
  refreshSecretKey: process.env.REFRESH_SECRET_KEY,
  refreshTokenExpires: process.env.REFRESH_TOKEN_EXPIRES,
  hostMail: process.env.HOST_MAIL,
  mailUser: process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASS,
  mailFrom: process.env.MAIL_FROM,
  adress:
    process.env.NODE_ENV === 'development'
      ? process.env.SERVER_DEV
      : process.env.SERVER_PROD,
});
