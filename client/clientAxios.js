import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();
const URL = process.env.URL || "http://localhost:8080/users"



const getUsers = () => {
    console.log("--Iniciando Get")
    axios.get(URL)
        .then(result => console.log(result))
}

const createUser = () => {
    console.log("--Iniciando Post")

    axios(URL, {
        method: 'POST',
        //req.body
        data: {
            first_name: "prueba1a",
            last_name: "last1a",
            enterprise: "enter1a",
            job: "job1a"
        }
    }).then(result => console.log(result.data))
        .catch(err => console.log(err))
}

//se pasan los datos a actualizar como un objeto en el body
const updateUser = () => {
    console.log("--Iniciando PUT")

    axios(URL, {
        method: 'PUT',
        //req.body
        data: {
            id: "6304e14a108d0f8d83ad5780",
            content: {
                first_name: "AAAaXIOS"
            }
        }
    }).then(result => console.log(result.data))
        .catch(err => console.log(err))

}

// se pasa el Id del registro por parametro
const deleteUser = () => {
    console.log("--Iniciando DELETE")

    axios(`${URL}]/630698df43f8e30c69f4dbe7`, {
        method: 'DELETE'
    }).then(result => console.log(result.data))
        .catch(err => console.log(err))

}

export default {
    getUsers,createUser,updateUser,deleteUser
}