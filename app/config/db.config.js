module.exports = {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "postgres",
    PASSWORD: process.env.DB_PASSWORD || "password",
    DB: process.env.DB_NAME || "postgres",
    PORT: process.env.DB_PORT || "5432",
    dialect: "postgres"
  };