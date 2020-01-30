module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/wow_api',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
