import { Request, Response } from "express";
import {Knex} from "../database/knex/index";
const knex = Knex;

import UserService from "../services/UserService";

class UsersController {
    constructor() {
        
    }

    public async getUsers(req: Request, res: Response) {
        
        try {

            const users = await UserService.getUsers();
            
            res.status(200).json({
                status: '200',
                data: users,
            });
            
        } catch (error: any) {
            res.json({
                status: error.status,
                message: error.message
            });
        }

    }

    public async createUser(req: Request, res: Response) {

        try {
            let userData = req.body;
            const users = await knex('users')
                .insert(userData)
                .then(resultado => {
                    return resultado;
                })
                .catch(erro => {
                    return erro;
                })
                .finally(() => {
                    knex.destroy();
                });
            
            res.status(201).json({
                status: '201',
                message: 'Usuário criado com sucesso.',
                data: users,
            });
            
        } catch (error: any) {
            res.json({
                status: error.status,
                message: error.message
            });
        }

    }

    public async updateUser(req: Request, res: Response) {

        try {
            const id = req.params.id;
            let userData = req.body;
    
            const users = await knex('users')
                .where('id', id)
                .update(userData)
                .then(resultado => {
                    return resultado;
                })
                .catch(erro => {
                    return erro;
                })
                .finally(() => {
                    knex.destroy();
                });
    
            res.status(200).json({
                status: '200',
                message: 'Usuário alterado com sucesso.',
                data: users,
            });
    
        } catch (error: any) {
            res.json({
                status: error.status,
                message: error.message
            });
        }
        
    }
}

export const usersController = new UsersController();