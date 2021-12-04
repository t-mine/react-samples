import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route render={() => <p>Page not found.</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <h1>Hello React Router</h1>
//     </div>
//   );
// }

// export default App;
