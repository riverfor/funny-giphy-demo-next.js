// Update with your config settings.
const databaseName = "postgres";

module.exports = {

	development: {
		client: "postgresql",
		// connection: `postgres://localhost:5432/${databaseName}`,
		connection: {
			host: 'db',
			user: 'postgres',
			password: 'postgres',
			database: databaseName
		},
		migrations: {
			directory: "./db/migrations"
		},
		seeds: {
			directory: __dirname + "/reactjs/db/seeds"
		}
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}

};
