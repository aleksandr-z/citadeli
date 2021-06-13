module.exports = {
    apps: [
        {
            name: 'citadeli',
            script: './main.js',
            env_production: {
                DB_HOST: '$DB_HOST',
                DB_PORT: $DB_PORT,
                DB_NAME: '$DB_NAME',
                DB_USER: '$DB_USER',
                DB_PASSWORD: '$DB_PASSWORD',
                NODE_ENV: 'production',
            },
        },
    ],
};
