import axios from 'axios'
import React, { useEffect } from 'react'
import Card, { CardVariant } from './components/Card'
import UserItem from './components/UserItem'
import List from './components/List'
import { IUser,ITodo } from './types/types'
import TodoItem from './components/TodoItem'
import EventsExample from './components/EventsExample'

const App = () => {

  const [users, setUsers] = React.useState<IUser[]>([])  
  const [todos, setTodos] = React.useState<ITodo[]>([])  

  useEffect(() => {
    fetchUsers()
    fetchTodos()
    }, [])

    async function fetchUsers() {
      try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
      }
      catch (e){
        alert(e)
      }
    }

    async function fetchTodos() {
      try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(response.data)
      }
      catch (e){
        alert(e)
      }
    }

  return (
  <div>
    <EventsExample/>
    <Card onClick={(num)=>alert(`hola ${num}`)} width='200px' height='120px' variant={CardVariant.outlined}>
      <span>Push me</span>
    </Card>
  <List
    items={users}
    renderItem={(user:IUser)=><UserItem user={user} key={user.id}/>}
  />
  <List
    items={todos}
    renderItem={(todo:ITodo)=><TodoItem todo={todo} key={todo.id}/>}
  />
  </div>
  )
}

export default App