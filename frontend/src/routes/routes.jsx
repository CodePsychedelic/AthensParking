import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import DraftRoutes from './draft';

const AppRoutes = () => (
   <Router>
      <DraftRoutes/>
   </Router>
);

export default AppRoutes;