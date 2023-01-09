import "./App.css";
import React from "react";
import Loader from "./component/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListProvider } from "./utils/Context";
import Navbar from "./component/Navbar";
const CalulatorScreen = React.lazy(() => import("./screen/calulator"));
const ResultScreen = React.lazy(() => import("./screen/result"));
function App() {
  return (
    <React.Suspense fallback={<Loader />}>
      <ListProvider>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CalulatorScreen />} />
            <Route path="/list" element={<ResultScreen />} />
          </Routes>
        </BrowserRouter>
      </ListProvider>
    </React.Suspense>
  );
}

export default App;
