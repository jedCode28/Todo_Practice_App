import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TodoNew from './TodoNew'


const Home = () => {
  

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
          <p>blah1</p>
          <p>{todo.title}</p>
          <p>{todo.body}</p>
          <p>blah2</p>
        </div>
      )
    }
      
      
    )
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
