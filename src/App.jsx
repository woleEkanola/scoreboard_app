import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
//   const styleBg= {
// {'backgroundColor': 'red'}
//   }
  const [countManU, setCountManU] = useState(0)
  const [countChel, setCountChel] = useState(4)
  const [bgColor, setBgColor] = useState('')

  const test = ()=>{
    
  }

  useEffect(()=>{
    if(countChel > countManU){
      setBgColor('blue')
    }else if(countChel == countManU){
      setBgColor('black')
    }else{
      setBgColor('red')
    }
  }, [countManU, countChel])

  const add = (x)=>{
    return x + 1
  }

  return (
    <div className="App" style={{'backgroundColor': `${bgColor}`, 'padding': '30px', 'color':'white'}}>
     
     <h1>Man U <span>{countManU}</span></h1> 
     <p>vs</p>
     <h1>Chelsea <span>{countChel}</span></h1> 
     <button onClick={()=>{
     setCountManU(add(countManU))
     }}>Update manU</button>
       <button style={{'marginLeft': '10px'}} onClick={()=>{
     setCountChel(add(countChel))
     }}>Update Chelsea</button>
    </div>

  )
}

export default App
