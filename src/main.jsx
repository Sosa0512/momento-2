import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LoginForm } from './components/auth/login-form/login-form';
import { RegisterForm } from './components/auth/register-form/register-form';
import { Header } from './components/header/header';
import { ServicesPage } from './components/page/services-page/services-page';
import { AboutPage } from './components/pages/about-page/about-page';
import { ContactPage } from './components/pages/contact-page/contact-page';
import { HomePage } from './components/pages/home-page/home-page';
import './index.css';

export function Main() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}