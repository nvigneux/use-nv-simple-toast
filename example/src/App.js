import React, { Component } from "react";

import { ToastContainer, useToast } from "use-nv-simple-toast";
import { Navbar } from "./Navbar";

const Toaster = () => {
  const { setToast } = useToast();
  return (
    <div>
      <button onClick={() => setToast({title: 'My toast'})}>Launch Toast</button>
    </div>
  );
};

export default class App extends Component {
  render() {
    return (
      <ToastContainer>
        <Navbar />
        <Toaster/>
      </ToastContainer>
    );
  }
}