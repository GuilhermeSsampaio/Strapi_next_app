module.exports = ({env}) => ({
  connection: {
    client: 'postgres',
    connection:{
        host:env('DATABASE_HOST', 'localhost'),
        port: env('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'teste'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD','1234'),
        schema: env('DATABASE_SCHEMA', 'public')

    },
  },
});
