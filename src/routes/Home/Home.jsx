import React from "react";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import { AboutContent } from "../../components/aboutContent/AboutContent";

export default function Home() {
  return (
    <div>
      <Nav />
      <p style={{ color: "black" }}>.</p>
      <AboutContent />
      <Footer />
    </div>
  );
}
