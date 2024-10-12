import { describe, expect, it } from '@jest/globals';
import {Knex} from "../src/database/knex/index";
const knex = Knex;

import UserService from '../src/services/UserService';

describe('Index', () => {

    beforeAll(async () => {
        await knex.migrate.latest();
    });

    afterAll(async () => {
        await knex.destroy();
    });

    it('Should be return zero users', () => {        
        UserService.getUsers().then(result => {
            expect(result.length).toBe(0);
        });
    });

    it('Should be error on create user', () => {        
        UserService.createUser({
            "namee":"Testman",
            "email":"testman@test.com",
            "password":"test"
        }).then(result => {
            expect(result).toBeInstanceOf(Error);
        })
        
    });

    it('Should be success on create user', () => {        
        UserService.createUser({
            "name":"Testman",
            "email":"testman@test.com",
            "password":"test"
        }).then(result => {
            expect(result).toBeInstanceOf(Error);
        })
    });

    it('Should be success on update user', () => {        
        UserService.updateUser(1, {
            "name":"Testman",
            "email":"testman@test.com",
            "password":"test"
        }).then(result => {
            expect(result).toBeInstanceOf(Error);
        })
    });
    
    it('Should be error on update user', () => {        
        UserService.updateUser(0, {
            "name":"Testman",
            "email":"testman@test.com",
            "password":"test"
        }).then(result => {
            expect(result).toBeInstanceOf(Error);
        })
    });

    it('Should be success on delete user', () => {        
        UserService.deleteUser(1).then(result => {
            expect(result).toBeInstanceOf(Error);
        })
    });

    it('Should be error on delete user', () => {        
        UserService.deleteUser(0).then(result => {
            expect(result).toBeInstanceOf(Error);
        })
    });

});