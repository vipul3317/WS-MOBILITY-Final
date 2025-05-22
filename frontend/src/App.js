
import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import Renewal from './pages/Service-pages/renewal';
import Service from './pages/Service-pages/car-service';
import ParentHome from './pages/ParentHome/home';
import AppointForm from './pages/forms/appointmentForm';
import RoadSideAssistance from './pages/Service-pages/roadside';
import Layout from './components/navbar/layout';
import Coming from './components/comingSoon/coming';
import UnderProgress from './components/underProgress/underprogress';
function App() {
  return (
    <Routes>
      <Route path="/coming-soon" element={<Coming />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<ParentHome />} />
              <Route path="/carhub" element={<Home />} />
              <Route path="/carhub/login" element={<Login />} />
              <Route path="/carhub/signup" element={<Signup />} />
              <Route path="/carhub/services" element={<Service />} />
              <Route path="/appointment" element={<AppointForm />} />
              <Route path="/carhub/roadside-services" element={<RoadSideAssistance />} />
              <Route path='/under-progress' element={<UnderProgress/>}/>
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
