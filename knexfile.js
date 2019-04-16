const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db',
    migrations: {
      directory: './db/migrations'
    }
  }
};

const customConfigs = {
  development: {
    connection: {
      production: {
        connection: `${DB_URL}?ssl=true`
      },
      seeds: {
        directory: './db',
        migrations: {
          directory: './db/migrations'
        }
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
  seeds: {
    directory: './db',
    migrations: {
      directory: './db/migrations'
    }
  },
  production: {
    connection: `${DB_URL}?ssl=true`
  }
};

module.exports = { ...baseConfig, ...customConfigs[ENV] };
