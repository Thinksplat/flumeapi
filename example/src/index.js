import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import TestEditor from './TestRoutes/TestEditor'
import Form from "./pages/Form/Form";
import Forms from "./pages/Forms/Forms";
import Records from "./pages/Records/Records";
import { createRoot } from 'react-dom/client';
import "./index.css";


const FormStyles = () => (
  <style>{`body{background: rgb(198, 203, 208);}`}</style>
);

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/records"
        element={(
          <React.Fragment>
            <FormStyles />
            <Records />
          </React.Fragment>
        )}
      />
      <Route
        path="/forms"
        element={(
          <React.Fragment>
            <FormStyles />
            <Forms />
          </React.Fragment>
        )}
      />
      <Route
        path="/form/:formId"
        element={(
          <React.Fragment>
            <FormStyles />
            <Form />
          </React.Fragment>
        )}
      />
      <Route
        path="/form"
        element={(
          <React.Fragment>
            <FormStyles />
            <Form />
          </React.Fragment>
        )}
      />
      <Route
        path="/test"
        element={(
          <TestEditor />
        )}
      />
    </Routes>
  </Router>);
