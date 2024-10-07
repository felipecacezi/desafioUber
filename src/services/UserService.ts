import UserRepository from "../repository/userRepository";

class UserService {
    public async getUsers() {
        try {
            const users = await UserRepository.getUsers();
            return users;            
        } catch (error: any) {
            throw new Error(error.message);            
        }
    }
}

export default new UserService();