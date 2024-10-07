import { describe, expect, it } from '@jest/globals';
import {Knex} from "../src/database/knex/index";
const knex = Knex;

import UserRepository from '../src/repository/userRepository';

describe('Index', () => {

    beforeAll(async () => {
        await knex.migrate.latest();
    });
    afterAll(async () => {
        await knex.destroy();
    });

    it('Should be return zero users', () => {
        
        UserRepository.getUsers().then(result => {
            expect(result.length).toBe(0);
        });

    });

});