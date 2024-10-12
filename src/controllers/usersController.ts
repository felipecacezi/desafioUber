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
            const users = await UserService.createUser(req.body);
            
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
    
            const users = await UserService.updateUser(parseInt(id), userData);
    
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

    public deleteUser(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const users = UserService.deleteUser(
                parseInt(id)
            );
            
            res.status(200).json({
                status: '200',
                message: 'Usuário inativado com sucesso.',
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