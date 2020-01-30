module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/wow_project',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
