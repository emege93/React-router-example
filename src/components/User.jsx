import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {id} = useParams()

    const [selectUser, setSelectUser] = React.useState([])

    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const user = await data.json()
            setSelectUser(user)
        }
        obtenerDatos()
    }, [id])

    return (
        <div>
            <h1>{selectUser.name}</h1>
            <p>{selectUser.username}</p>
            <p>{selectUser.email}</p>
        </div>
    )
}

export default User
