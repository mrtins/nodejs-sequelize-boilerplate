export default {
  local: {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: '',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: false
    },
    define: {
      timestamps: true,
      freezeTableName: true,
      createdAt: 'dh_insertion',
      updatedAt: false,
      defaultScope: {
        attributes: { exclude: ['insertionUserId', 'dh_insertion'] },
      },
      scopes: {}
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
  development: {
    host: 'development',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: '',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: false
    },
    define: {
      timestamps: true,
      freezeTableName: true,
      createdAt: 'dh_insertion',
      updatedAt: false,
      defaultScope: {
        attributes: { exclude: ['insertionUserId', 'dh_insertion'] },
      },
      scopes: {}
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
  stage: {
    host: 'stage',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: '',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: false
    },
    define: {
      timestamps: true,
      freezeTableName: true,
      createdAt: 'dh_insertion',
      updatedAt: false,
      defaultScope: {
        attributes: { exclude: ['insertionUserId', 'dh_insertion'] },
      },
      scopes: {}
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
  production: {
    host: 'production',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: '',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: false
    },
    define: {
      timestamps: true,
      freezeTableName: true,
      createdAt: 'dh_insertion',
      updatedAt: false,
      defaultScope: {
        attributes: { exclude: ['insertionUserId', 'dh_insertion'] },
      },
      scopes: {}
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
}