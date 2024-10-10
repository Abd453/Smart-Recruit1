import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Card/Cards';
import Modal from './components/Card/Modal';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';
import PrivateRoutes from './utils/PrivateRoutes';

import Footer from './components/Footer';
import Login from './components/Login';

import Signup from './components/Signup';
import TeamleadL from './components/Login';
import TeamleadH from './pages/TeamLead/Home';
import Newjobs from './pages/TeamLead/newjobs';

import ManagerL from './components/Login';
import ManagerH from './pages/Manager/Home';
import Jobstobe from './pages/Manager/jobstobe';

import EmployeeL from './components/Login';
import EmployeeH from './pages/Employee/Home';
// import Apply  from "./pages/Manager/jobstobe";

import MyProfile from './pages/Employee/myProfile';
import Applyform from './pages/Employee/applyform';

import Testimonials from './components/Testimonial/Testimonials'; //Testimonials
import Experience from './components/Experience/Experience';

import Talk from './components/Talks/Talk';
import Faqs from './components/FAQS/FAQs';

import Wedo from './components/Wedo/Wedo';

import Features from './components/Features/Features';
import Jobstable from './pages/Manager/jobstable';

// HR part

import Sidebar from './components/common/Sidebar';
import LayoutHr from './pages/LayoutHr';
import OverviewPage from './pages/OverviewPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import SalesPage from './pages/SalesPage';
import OrdersPage from './pages/OrdersPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import CalendarPage from './pages/CalendarPage';
import DepartmentPage from './pages/DepartmentPage';
import ApprovedJobPage from './pages/ApprovedJobPage';

const App = () => {
  // const currentop = useRef(null);
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <div className="max-w-7xl mx-auto pt-20 px-6"> */}
                <Navbar />
                <div className="max-w-7xl mx-auto pt-20 px-6">
                  <HeroSection />
                
                  <Cards landing = {true} disapply ={false} />
                  <Wedo />
                  <Features />
                  <Experience />
                  <Faqs />
                  <Talk />
                  <Testimonials />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/loginteam" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="//applyform/" element={<Applyform />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoutes allowedRoles={['teamlead']} />}>
            <Route path="/teamleadhome" element={<TeamleadH />} />
            <Route path="/newjobs" element={<Newjobs />} />
          </Route>

          <Route element={<PrivateRoutes allowedRoles={['hr']} />}>
            <Route element={<LayoutHr />}>
              <Route path="/overview" element={<OverviewPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/sales" element={<SalesPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/department" element={<DepartmentPage />} />
              <Route path="/approvedjob" element={<ApprovedJobPage />} />
            </Route>
          </Route>

          <Route element={<PrivateRoutes allowedRoles={['manager']} />}>
            <Route path="/managerhome" element={<ManagerH />} />
            <Route path="/jobstobe" element={<Jobstobe />} />
            <Route path="/jobstable" element={<Jobstable />} />
            <Route path="/jobstable" element={<Jobstable />} />
          </Route>

          <Route element={<PrivateRoutes allowedRoles={['employee']} />}>
            <Route path="/employeehome" element={<EmployeeH />} />
            <Route path="/userprofile/:userId" element={<MyProfile />} />
            <Route
              path="/applyform/:userId/:jobTitle"
              element={<Applyform />}
            />
          </Route>

          {/* <Route path="*" element={<h1 className="m-auto items-center justify-center">404 Page not Found</h1>}/> */}
          <Route
            path="*"
            element={
              <h1 className="flex items-center justify-center min-h-screen text-4xl font-bold text-gray-800">
                404 Page not Found
              </h1>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
