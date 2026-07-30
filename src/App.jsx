import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import useLenis from "@/hooks/useLenis";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/pages/Portfolio";
import { PROFILE } from "@/constants/data";

function Seo() {
  const desc = "Senior Java Backend Developer specialising in Java, Spring Boot, Microservices, REST APIs and scalable enterprise systems.";
  return (
    <>
      <title>{`${PROFILE.name} — ${PROFILE.role}`}</title>
      <meta name="description" content={desc} />
      <meta name="theme-color" content="#020617" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${PROFILE.name} — ${PROFILE.role}`} />
      <meta property="og:description" content={desc} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${PROFILE.name} — ${PROFILE.role}`} />
      <meta name="twitter:description" content={desc} />
    </>
  );
}

function App() {
  useLenis();
  return (
    <div className="relative bg-[#020617] min-h-screen">
      <Seo />
      <div className="noise" />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{ style: { background: "#0f172a", border: "1px solid #1e293b", color: "#f8fafc" } }}
      />
    </div>
  );
}

export default App;
