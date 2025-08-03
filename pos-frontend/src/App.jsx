import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth, Home, Orders, Tables } from "./pages";
import Header from "./components/shared/header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/tables" element={<Tables />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
