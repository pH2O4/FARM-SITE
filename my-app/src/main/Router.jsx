import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from '../componentes/Home'

export default props=>
<Routes>
  <Route exact path="/Home" element={<Home/>}/>
</Routes>