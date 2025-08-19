import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth, Home, Menu, Orders, Tables } from "./pages";
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
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="*" element={<div>Not Found</div>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
