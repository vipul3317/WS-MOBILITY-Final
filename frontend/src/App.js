
import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
// import Renewal from './pages/Service-pages/renewal';
import Service from './pages/Service-pages/car-service';
import ParentHome from './pages/ParentHome/home';
import AppointForm from './pages/forms/appointmentForm';
import RoadSideAssistance from './pages/Service-pages/roadside';
import Layout from './components/navbar/layout';
import Coming from './components/comingSoon/coming';
import UnderProgress from './components/underProgress/underprogress';
import EVLandingPage from './pages/EVpage/evpage';
import EvbikePage from './pages/EVpage/evbikePage';
import EVDealership from './pages/EVpage/evdealership';
import DealershipContact from './pages/DealershipContact/DealershipContact';
import ContractServicesPage from './pages/Service-pages/contract-form';
function App() {
  return (
    <Routes>
  
      <Route path="/" element={<ParentHome />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/carhub" element={<Home />} />
              <Route path="/carhub/login" element={<Login />} />
              <Route path="/carhub/signup" element={<Signup />} />
              <Route path="/carhub/services" element={<Service />} />
              <Route path="/appointment" element={<AppointForm />} />
              <Route path="/carhub/roadside-services" element={<RoadSideAssistance />} />
              <Route path="/carhub/contract-form" element={<ContractServicesPage/>}/>
              <Route path='/under-progress' element={<UnderProgress/>}/>
            </Routes>
          </Layout>
        }
      />
      <Route path='/ev-dealership-opportunity' element={<EVLandingPage/>}/>
      <Route path='/evbikemodels' element={<EvbikePage/>}/>
      <Route path='/evdealershipcontact' element={<DealershipContact/>}/>
      <Route path='/evdealership' element={<EVDealership/> }   />
    </Routes> 
  );
}

export default App;
