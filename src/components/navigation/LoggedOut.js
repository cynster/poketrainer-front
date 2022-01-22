import React from "react";
import NavbarItem from "./navbarItem";

// Only shows when logged out
export default function LoggedOut() {
  return (
    <>
      <NavbarItem path="/login" linkText="Login/Register" />
    </>
  );
}
