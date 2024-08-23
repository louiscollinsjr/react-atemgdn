import React from "react";
import { Routes, Route } from 'react-router-dom';

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

import './app.scss';

const App: React.FC = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home title="uuuhh ahhh"/>} />
    </Route>
  </Routes>
  );
};

export default App;