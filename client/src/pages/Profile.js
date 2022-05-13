import React, {useContext} from 'react'
import {UserContext} from "../context/user"

const Profile = () => {
    const {user} = useContext(UserContext)
    
    return (
        <div>
            <h2>{user.username} Profile</h2>
            <h4>{user.email}</h4>
        </div>
    )
}

export default Profile