import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RolesSection from "./components/RolesSection";
import Footer from "./components/Footer";
import AuthPage from "./components/AuthPage";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 font-sans">
      <Header />

      <main>
        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <>
                <div className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-400/10 dark:bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
                  <Hero />
                </div>
                <RolesSection />
              </>
            }
          />

          {/* Auth Page */}
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}