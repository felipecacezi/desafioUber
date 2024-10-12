import {Knex} from "../database/knex/index";
const knex = Knex;

class UserRepository {
    constructor() {
        
    }

    public async getUsers() {
        try {
            return await knex('users')
                .select('*')
                .then(resultado => {
                    return resultado;
                })
                .catch(erro => {
                    return erro;
                })
                .finally(() => {
                    knex.destroy();
                });
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar usuários, entre em contato com o suporte.");            
        }
    }

    public async createUser(user: object) {
        try {
            return await knex('users')
                .insert(user)
                .then(result => {
                    return result;
                })
                .catch(erro => {
                    return erro;
                })
                .finally(() => {
                    knex.destroy();
                });
        } catch (error) {
            throw new Error("Ocorreu um erro ao criar o usuário, entre em contato com o suporte.");            
        }
    }

    public async updateUser(id: number, user: object) {
        try {
            return await knex('users')
                .where('id', id)
                .update(user)
                .then(result => {
                    return result;
                })
                .catch(erro => {
                    return erro;
                })
                .finally(() => {
                    knex.destroy();
                });
        } catch (error) {
            throw new Error("Ocorreu um erro ao atualizar o usuário, entre em contato com o suporte.");            
        }
    }

    public async deleteUser(id: number) {
        try {
            return await knex('users')
                .where('id', id)
                .update({
                    'active': '0'
                })
                .then(result => {
                    return result;
                })
                .catch(erro => {
                    return erro;
                })
                .finally(() => {
                    knex.destroy();
                });
        } catch (error) {
            throw new Error("Ocorreu um erro ao inativar o usuário, entre em contato com o suporte.");            
        }
    }
}

export default new UserRepository();