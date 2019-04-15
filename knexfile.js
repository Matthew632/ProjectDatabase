const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db'
  },
  seeds: {
    directory: './db'
  }
};

const customConfigs = {
  development: {
    connection: {
      production: {
        connection: `${DB_URL}?ssl=true`
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
  production: {
    connection: `${DB_URL}?ssl=true`
  }
};

module.exports = { ...baseConfig, ...customConfigs[ENV] };
