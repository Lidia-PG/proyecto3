import { useState, useEffect } from 'react';

const UserList = () => {
    const [user, setUser] = useState({
        nombre: "",
        apellido1: "",
        apellido2: "",
        email: "",
        telefono: ""
    });

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        async function getData() {
            let users = await UserService.getAllUsers();
            setUserList(users);
        }
        getData();
    }, []);

    function handleInputChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    async function handleAddUserToList() {
        await UserService.submitUser(user);
        setUser({
            nombre: "",
            apellido1: "",
            apellido2: "",
            email: "",
            telefono: ""
        });
    }

    return (
        <>
            <h1>Lista de alumnos</h1>

            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" value={user.nombre} onChange={handleInputChange} />

            <label htmlFor="apellido1">Apellido 1</label>
            <input type="text" name="apellido1" value={user.apellido1} onChange={handleInputChange} />

            <label htmlFor="apellido2">Apellido 2</label>
            <input type="text" name="apellido2" value={user.apellido2} onChange={handleInputChange} />

            <label htmlFor="email">Email de contacto</label>
            <input type="email" name="email" value={user.email} onChange={handleInputChange} />

            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" name="telefono" value={user.telefono} onChange={handleInputChange} />

            <button onClick={handleAddUserToList}>Añadir usuario</button>
            <ul>
                {
                    userList.map((user, index) => (
                        <li key={index}> {user.nombre} {user.apellido1} {user.apellido2} </li>
                    ))
                }
            </ul>
        </>
    );
}

export default UserList;
