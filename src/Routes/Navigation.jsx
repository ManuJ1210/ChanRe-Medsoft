import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import AboutUs from "../Pages/AboutUs";
import OurProducts from "../Pages/OurProducts";
import HICMSPage from "../ProductsInformations.jsx/HICMS";
import AppointmentSystem from "../ProductsInformations.jsx/AppointmentSystem";
import AIChatbot from "../ProductsInformations.jsx/AIChatbot";
import DatabaseRegistry from "../ProductsInformations.jsx/DatabaseRegistry";

function Navigation() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs/>} />
         <Route path="/ourproducts" element={<OurProducts/>} />



         <Route path="/HICMSPage" element={<HICMSPage/>}/>
          <Route path="/AppointmentSystem" element={<AppointmentSystem/>}/>
           <Route path="/AIChatbot" element={<AIChatbot/>}/>
            <Route path="/DatabaseRegistry" element={<DatabaseRegistry/>}/>
             <Route path="/HICMSPage" element={<HICMSPage/>}/>
              <Route path="/HICMSPage" element={<HICMSPage/>}/>
               <Route path="/HICMSPage" element={<HICMSPage/>}/>
                <Route path="/HICMSPage" element={<HICMSPage/>}/>

      </Routes>
     
    </>
  );
}

export default Navigation;
