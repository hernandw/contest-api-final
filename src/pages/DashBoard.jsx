import { Navigate } from "react-router-dom";


const DashBoard = ({ user }) => {
   if (!user) return <Navigate to="/login" />;
  return (
    <div>
      <h1>DashBoard (Protected)</h1>
    </div>
  )
}

export default DashBoard
