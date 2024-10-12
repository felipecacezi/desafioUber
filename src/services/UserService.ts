import UserRepository from "../repository/userRepository";
import { User } from "../interfaces/User";

class UserService {
    public async getUsers() {
        try {
            return await UserRepository.getUsers();
        } catch (error: any) {
            throw new Error(error.message);            
        }
    }

    public async createUser(user: User) {
        try {
            return await UserRepository.createUser(user);       
        } catch (error: any) {
            throw new Error(error.message);            
        }
    }

    public async updateUser(id: number, user: User) {
        try {
            return await UserRepository.updateUser(id, user);
        } catch (error: any) {
            throw new Error(error.message);            
        }
    }

    public async deleteUser(id: number) {
        try {
            return await UserRepository.deleteUser(id);
        } catch (error: any) {
            throw new Error(error.message);            
        }
    }
}

export default new UserService();