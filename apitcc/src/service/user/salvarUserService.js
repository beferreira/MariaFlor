import salvarUser from "../../repository/userRepository.js";

export default async function salvarUserService(user){

    let id = await salvarUser(user);

    return id;
    
}