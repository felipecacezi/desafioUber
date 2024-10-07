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
}

export default new UserRepository();