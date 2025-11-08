// import ProfileCard from './components/ProfileCard';
// import CoolButton from './components/CoolButton';
// import Counter from './components/Counter';
// import LikeButton from './components/LikeButton';
// import GreetingApp from './components/GreetingApp';
// import TitleChanger from './components/TitleChanger';
// function App(){
//   return (
//     <div>
//       <h1>My App</h1>
//       <ProfileCard />
//       <CoolButton />
//       <Counter />
//       <LikeButton />
//       <GreetingApp />
//       <TitleChanger />
//     </div>
//   )
// }
// export default App

// import React, {useState, useEffect} from 'react'
// import TodoList from './components/TodoList'

// const App = () => {
 
//   const [details, setDetails ] = useState ({counter : 0, name : ''})
  
//   useEffect(()=>{
//     document.title = `You have ${details.counter} messages`
//   }, []);
//   function increaseCounter(){
//     setDetails((prev)=>({
//       ...prev,
//       counter: prev.counter + 1
//     }) )
//   }
//   return (
//     <div>
//       <TodoList/>
//       <input type='text' onChange = {e => setName(e.target.value)}/>
//       <h1>{details.name} has clicked {details.counter} times</h1>
//       <button onClick ={increaseCounter}>Increase</button>
//     </div>
//   )
// }

// export default App

import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/pages/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Profile from './components/pages/Profile'

function App(){
  return(
    <BrowserRouter>
    
    </BrowserRouter>
  )
}