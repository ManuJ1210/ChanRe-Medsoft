import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";


function Navigation() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Homepage />} />
      
      </Routes>
     
    </>
  );
}

export default Navigation;
