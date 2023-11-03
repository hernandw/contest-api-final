
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, login, logout }) => {



  
  return (
    <div className="navbar__container">
      <div>Logo</div>
      <div>
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product/:id">Details</NavLink>

          <NavLink to="/dashboard">DashBoard</NavLink>
          {user ? (
            <NavLink onClick={() => logout()} to="/login">
              Logout
            </NavLink>
          ) : (
            <NavLink onClick={() => login()} to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar
