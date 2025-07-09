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
import HIMS from "../ProductsInformations/HIMS";
import PharmacyManagement from "../ProductsInformations/PharmacyManagement";
import Partner from "../Pages/Partner";
import Contact from "../Pages/Contact";
import Quotation from "../Pages/Quotation";
import AndroidAppDevelopment from "../ServicesInfo/AndroidDevelopment";



function Navigation() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs/>} />
         <Route path="/ourproducts" element={<OurProducts/>} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/Partner" element={<Partner />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Quotation" element={<Quotation />} />



        <Route path="/HICMSPage" element={<HICMSPage />} />
        <Route path="/AppointmentSystem" element={<AppointmentSystem />} />
        <Route path="/AIChatbot" element={<AIChatbot />} />
        <Route path="/DatabaseRegistry" element={<DatabaseRegistry />} />
        <Route path="/CDME" element={<CDME />} />
        <Route path="/OnlineQuize" element={<OnlineQuize />} />
        <Route path="/HIMS" element={<HIMS />} />
        <Route path="/PharmacyManagement" element={<PharmacyManagement />} />


        <Route path="/WebsiteDevelopment" element={< WebsiteDevelopment/>}/>
        <Route path="/AndroidAppDevelopment" element={<AndroidAppDevelopment />} />


      </Routes>
     
    </>
  );
}

export default Navigation;
