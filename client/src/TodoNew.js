import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios' 

const TodoNew = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const history = useHistory()

  const handleChange = async() => {
    // e.preventDefault()
    try{
       axios.post(`/api/todos`, {title, body})
       history.push('/')
    } catch(err){
      alert('error in TodoNew component')
    }
  }

  return(
    <div>
      <form onSubmit={handleChange}>
      <input 
        value={title} 
        onChange={(e)=> setTitle(e.target.value)}
        defaultValue={title}
        placeholder='title'
      />
      <input 
        value={body} 
        onChange={(e)=> setBody(e.target.value)}
        defaultValue={body}
        placeholder='body'
      />
       <button type='submit'>Submit</button>
      </form>
     
    </div>
  )
}

export default TodoNew