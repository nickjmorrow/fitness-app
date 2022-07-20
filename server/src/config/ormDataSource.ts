import { ConnectionOptions } from 'tls';
import { DataSource, DataSourceOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import ormConfig from './ormConfig';

const config = {
    ...ormConfig,
    type: 'postgres' as any,
    port: 35432,
    database: 'postgres',
    username: 'devuser',
    password: 'pass',
    migrationsTableName: 'migrations',
};

export const dataSource = new DataSource(config);
