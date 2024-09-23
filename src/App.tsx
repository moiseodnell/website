import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Pricing from "./routes/pricing/Pricing";
import Support from "./routes/support/Support";
import Home from "./routes/home/Home";
import { Footer } from "./shared/Footer";
import { Navbar } from "./shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ToastContainer
        position={toast.POSITION.TOP_CENTER}
        autoClose={2000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        style={{ marginTop: "2%" }}
      />
    </>
  );
}

export default App;
