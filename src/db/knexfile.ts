// Update with your config settings.

module.exports = {
  test: {
    client: 'mysql2',
    connection: {
      user: 'root',
      database: 'db_test',
    },
    migrations: {
      directory: 'migrations',
    },
    seeds: {
      directory: 'seeds/test',
    },
  },
  development: {
    client: 'mysql2',
    connection: {
      user: 'root',
      database: 'db_dev',
    },
    migrations: {
      directory: 'migrations',
    },
    seeds: {
      directory: 'seeds/development',
    },
  },

  staging: {
    client: 'mysql2',
    connection: {
      database: 'db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      database: 'db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
