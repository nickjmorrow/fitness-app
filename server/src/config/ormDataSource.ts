import { DataSource } from 'typeorm';
import ormConfig from './ormConfig';

export const dataSource = new DataSource(ormConfig);
