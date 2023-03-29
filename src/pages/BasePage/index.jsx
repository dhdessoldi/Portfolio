import Banner from "components/Banner";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export default function BasePage() {
  return (
    <main>
      <Header />
      {/* <Banner /> */}
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}
