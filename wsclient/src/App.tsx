import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [message,setMessage] = useState<"" | string>("")

  useEffect(()=>{
   const socket = new WebSocket('ws://localhost:8080')
   socket.onopen = () =>{
    console.log('Connected')
    setSocket(socket)
   }
   socket.onmessage = (message)=>{
    console.log("message received",message.data)
    setMessage(message.data)
   }

   return () =>{
    socket.close()
   }
  },[])

  if (!socket){
    return <div>
      Loading .....
    </div>
  }
  else{

     return <div>
      <input>
      </input>
      <button onClick={()=>{
        socket.send("Hello World");
      }}>

      </button>
      {message}
    </div>
  }
 
}

export default App
