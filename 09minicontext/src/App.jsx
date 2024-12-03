import './App.css'
import UserContextProvider from './context/UsercontextProvide'
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';


function App() {
  return (
    <UserContextProvider>
     <h1>React With Chai</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
