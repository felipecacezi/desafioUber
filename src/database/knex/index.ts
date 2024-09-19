import { knex } from 'knex';
import { development, production, test } from './enviroment';

const getEnviroment = () => {
    switch (process.env.NODE_ENV) {
        case 'test':
            return test;
        case 'production':
            return production;
        default:
            return development;
    }
}

export const Knex = knex(getEnviroment());