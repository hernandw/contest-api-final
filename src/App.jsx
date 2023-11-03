import { useContext } from 'react'
import './App.css'
import MyRoutes from './components/MyRoutes'
import NavBar from './components/NavBar'
import { MyContext } from './context/MyContext'

const App = () => {

  const {user, login, logout} = useContext(MyContext)
  return (
    <div className='container'>
      <NavBar user={user} login={login} logout={logout} />
      <MyRoutes user={user} />
    </div>
  )
}

export default App
