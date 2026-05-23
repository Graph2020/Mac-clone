import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";

function App() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  );
}

export default App;
