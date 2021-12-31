module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'prompt-of-the-day'),
      user: env('DATABASE_USERNAME', 'bennylu'),
      password: env('DATABASE_PASSWORD', 'C1u9B9e5*'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
