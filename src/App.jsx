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
import TeamleadH from './pages/TeamLead/Home';
import Newjobs from './pages/TeamLead/newjobs';

import ManagerH from './pages/Manager/Home';
import Jobstobe from './pages/Manager/jobstobe';

import EmployeeH from './pages/Employee/Home';

import MyProfile from './pages/Employee/myProfile';
import Applyform from './pages/Employee/applyform';

import Testimonials from './components/Testimonial/Testimonials';
import Experience from './components/Experience/Experience';

import Talk from './components/Talks/Talk';
import Faqs from './components/FAQS/FAQs';

import Wedo from './components/Wedo/Wedo';

import Features from './components/Features/Features';
import Jobstable from './pages/Manager/jobstable';

// HR part
import LayoutHr from './pages/LayoutHr';
import OverviewPage from './pages/OverviewPage';
import OpeningsPage from './pages/OpeningsPage';
import UsersPage from './pages/UsersPage';
import SalesPage from './pages/SalesPage';
import OrdersPage from './pages/OrdersPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import CalendarPage from './pages/CalendarPage';
import DepartmentPage from './pages/DepartmentPage';
import ApprovedJobPage from './pages/ApprovedJobPage';
import NotFound from './pages/NotFound';

import { AnimatePresence, motion } from 'framer-motion';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Navbar />
                  <div className="max-w-7xl mx-auto pt-20 px-6">
                    <HeroSection />
                    <Cards landing={true} disapply={false} />
                    <Wedo />
                    <Features />
                    <Experience />
                    <Faqs />
                    <Talk />
                    <Testimonials />
                  </div>
                  <Footer />
                </PageWrapper>
              }
            />
            <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
            <Route path="/loginteam" element={<PageWrapper><Login /></PageWrapper>} />
            <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />
            <Route path="/applyform/" element={<PageWrapper><Applyform /></PageWrapper>} />

            {/* Protected Routes */}
            <Route element={<PrivateRoutes allowedRoles={['teamlead']} />}>
              <Route path="/teamleadhome" element={<PageWrapper><TeamleadH /></PageWrapper>} />
              <Route path="/newjobs" element={<PageWrapper><Newjobs /></PageWrapper>} />
            </Route>

            <Route element={<PrivateRoutes allowedRoles={['hr']} />}>
              <Route element={<LayoutHr />}>
                <Route path="/overview" element={<OverviewPage />} />
                <Route path="/openings" element={<OpeningsPage />} />
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
              <Route path="/managerhome" element={<PageWrapper><ManagerH /></PageWrapper>} />
              <Route path="/jobstobe" element={<PageWrapper><Jobstobe /></PageWrapper>} />
              <Route path="/jobstable" element={<PageWrapper><Jobstable /></PageWrapper>} />
            </Route>

            <Route element={<PrivateRoutes allowedRoles={['employee']} />}>
              <Route path="/employeehome" element={<PageWrapper><EmployeeH /></PageWrapper>} />
              <Route path="/userprofile/:userId" element={<PageWrapper><MyProfile /></PageWrapper>} />
              <Route
                path="/applyform/:userId/:jobTitle"
                element={<PageWrapper><Applyform /></PageWrapper>}
              />
            </Route>

            <Route
              path="*"
              element={
                <PageWrapper>
                  <NotFound />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </AuthProvider>
  );
};

export default App;
