export default () => ({
  jwtKey: "jwtKey" || process.env.JWT_SECRET,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
});
