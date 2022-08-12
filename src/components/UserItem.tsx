import React from 'react'
import { IUser } from '../types/types';

interface UserItemProps {
   user: IUser;
}

const UserItem: React.FC<UserItemProps>  = ({user}) => {
  return (
   <div style={{padding:15,border:'1px solid gray'}}>
      #{user.id},{user.name} live in {user.address.city}, on {user.address.street} street. <br />his email: {user.email},
   </div>
  )
}



export default UserItem