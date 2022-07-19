import { DataSource, DataSourceOptions } from 'typeorm';

const getOrmConfig = (): DataSourceOptions => {
    const commonOptions = {
        entities: ['/app/dist/**/*.entity{.ts,.js}'],
        // We are using migrations, synchronize should be set to false.
        synchronize: false,
        type: 'postgres' as const,
        // Run migrations automatically,
        // you can disable this if you prefer running migration manually.
        logging: true,
        logger: 'file' as const,
        migrations: ['/app/dist/migrations/*{.ts,.js}'],
        migrationsTableName: 'migrations',
        migrationsRun: true,
        cli: {
            // Location of migration should be inside src folder
            // to be compiled into dist/ folder.
            migrationsDir: 'src/migrations',
        },
    };
    if (process.env.DATABASE_URL !== undefined) {
        return {
            url: process.env.DATABASE_URL,
            ...commonOptions,
        };
    }

    return commonOptions;
};

const ormConfig = getOrmConfig();

export = ormConfig;
