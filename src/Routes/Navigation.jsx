import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import AboutUs from "../Pages/AboutUs";
import OurProducts from "../Pages/OurProducts";
import HICMSPage from "../ProductsInformations/HICMS";
import AppointmentSystem from "../ProductsInformations/AppointmentSystem";
import AIChatbot from "../ProductsInformations/AIChatbot";
import DatabaseRegistry from "../ProductsInformations/DatabaseRegistry";
import WebsiteDevelopment from "../ServicesInfo/WebDevelopment";
import CDME from "../ProductsInformations/CDME";
import OnlineQuize from "../ProductsInformations/OnlineQuiz";
import OurServices from "../Pages/OurServices";

function Navigation() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs/>} />
         <Route path="/ourproducts" element={<OurProducts/>} />
        <Route path="/OurServices" element={<OurServices />} />



        <Route path="/HICMSPage" element={<HICMSPage />} />
        <Route path="/AppointmentSystem" element={<AppointmentSystem />} />
        <Route path="/AIChatbot" element={<AIChatbot />} />
        <Route path="/DatabaseRegistry" element={<DatabaseRegistry />} />
        <Route path="/CDME" element={<CDME />} />
        <Route path="/OnlineQuize" element={<OnlineQuize />} />
        <Route path="/HICMSPage" element={<HICMSPage />} />
        <Route path="/HICMSPage" element={<HICMSPage />} />

        <Route path="/WebsiteDevelopment" element={< WebsiteDevelopment/>}/>


      </Routes>
     
    </>
  );
}

export default Navigation;
