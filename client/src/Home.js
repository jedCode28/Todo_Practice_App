import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import TodoNew from './TodoNew'


const Home = () => {
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
   getTodos()
  }, [])

  const [todos, setTodos] = useState([])

  const getTodos = async() => {
    try{
      let res = await axios.get('/api/todos')
      console.log('res', res)
      console.log('res.data', res.data)
      setTodos(res.data)
    } catch(err){
      console.log('error', err)
    }
  }

 

  const renderTodos = () => {
    return todos.map ( todo=>{
      return(
        <div>
         
          <p>Title: {todo.title}</p>
          <p>Body: {todo.body}</p>
          <p>ID: {todo.id}</p>
          <button onClick={deleteTodo}>delete</button>
          <br/>
        </div>
      )
    } 
    )
  }

  const deleteTodo = async(id) =>{
    // TODO fix this. need to figure out how to pass in the individual IDs to make this work. 
    let rez = await axios.delete(`/api/todos/${id}`)
    history.push('/')
  }
 

  return (
    <>
    <div>
      this is home
      for home we need to make functions for show first (need to create seeds file)
      then destroy, then new, then update. yay
    </div>
    <br/>
    <div>
    {renderTodos()}
    </div>
    <div>
      {TodoNew()}
    </div>
    </>
  )
}

export default Home
