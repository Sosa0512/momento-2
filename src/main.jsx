import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/auth/login-form/login-form";
import RegisterForm from "./components/auth/register-form/register-form";
import Header from "./components/layout/header/header";
import AboutPage from "./components/pages/about-page/about-page.jsx";
import ContactPage from "./components/pages/contact-page/contact-page";
import HomePage from "./components/pages/home-page/home-page";
import ServicesPage from "./components/pages/services-page/services-page";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
