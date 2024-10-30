import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { LayoutProvider } from "./context/LayoutContext";
import "./i18n";

function App() {
  return (
    <div className="w-screen h-screen bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/home"
            element={
              <LayoutProvider>
                <Homepage />
              </LayoutProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
