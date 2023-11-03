import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Details from "../pages/Details"
import Login from "../pages/Login"
import DashBoard from "../pages/DashBoard"
import NotFound from "../pages/NotFound"


const MyRoutes = ({ user }) => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard user={user}/>} />
          <Route path="*" element={<NotFound />} />
      
    </Routes>
  )
}

export default MyRoutes
