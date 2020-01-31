import React, { Component, useState } from "react";

import { ToastContainer, useToast } from "use-nv-simple-toast";
import { Navbar } from "./Navbar";

const Toaster = () => {
  const { setToast } = useToast();
  const [values, setValues] = useState({ title: "", time: 5000 });

  const handleChangeForm = (field, value) =>
    setValues({ ...values, [field]: value });

  return (
    <div>
      <h1 className="app-page">nv-simple-toast</h1>
      <form>
        <label htmlFor="title">
          Custom Message
          <input
            name="title"
            type="text"
            onChange={e => handleChangeForm("title", e.target.value)}
          />
        </label>
        <label htmlFor="time">
          Custom time
          <input
            name="time"
            type="number"
            onChange={e => handleChangeForm("time", parseInt(e.target.value))}
          />
        </label>
        <button
          type="button"
          onClick={() => setToast({ title: values.title }, values.time)}
        >
          Launch Toast
        </button>
      </form>
    </div>
  );
};

export default class App extends Component {
  render() {
    return (
      <ToastContainer>
        <Navbar />
        <main className="app-container main-container">
          <Toaster />
        </main>
      </ToastContainer>
    );
  }
}
