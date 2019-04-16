const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  }
};

const customConfigs = {
  development: {
    connection: {
      production: {
        connection: `${DB_URL}?ssl=true`
      },

      migrations: {
        directory: './db/migrations'
      },
      database: 'final_project',
      username: 'tom',
      password: 'zimorodek'
    }
  },
  test: {
    connection: {
      database: 'final_project',
      username: 'tom',
      password: 'zimorodek'
    }
  },

  migrations: {
    directory: './db/migrations'
  },
  production: {
    connection: `${DB_URL}?ssl=true`
  },
  migrations: {
    directory: './db/migrations'
  }
};

module.exports = { ...baseConfig, ...customConfigs[ENV] };
