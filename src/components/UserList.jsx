import { useState, useEffect } from "react";
import { UserService } from "../userService";

const UserList = () =>{

    const [user, setUser] = useState(
    
        {
            userName: "",
            userSurname: ""
        }
        );

    const [userList, setUserList] = useState([]);

    
    async function getData(){
        
        let users = await UserService.getAllUsers();

        
        setUserList(users)  


    }


    getData();

    function handleNameChange(e){

        
        setUser({...user, [e.target.name]:e.target.value})
    };



    async function handleAddUserToList() {

      
        await UserService.submitUser(user);
    

    
        setUser({
            userName: "",
            userSurname: ""
        });

      }

    return(

        <>
        <h1>Qué lista eres</h1>

{/* hemos añadido  otro input y otro label. Al escribir, cada uno actualiza una propiedad del objeto user*/}
        <label htmlFor="userName"></label>
        <input type="text" name="userName" value={user.userName} onChange={handleNameChange}/>

        <label htmlFor="userSurname"></label>
        <input type="text" name="userSurname" value={user.userSurname} onChange={handleNameChange}/>

        <button onClick={handleAddUserToList}>Añadir usuario</button>
        <ul>

{/* antes, como userList era un array de strings, después del map solo teníamos que imprimir la variable "user",
ahora user es un objeto, para imprimir la información accedo a cada una de las propiedades por separado (dentro del map) */}
        {
            userList.map((user, index)=>(
                <li key={index}> {user.userName} {user.userSurname} </li>
            ))
        }
        </ul>
        </>
        
    )
}

export default UserList;