import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GroundList from '../components/ground/GroundList';
import GroundTest from '../components/ground/GroundTest';
import GroundDetail from '../components/ground/GroundDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/grounds' element={<GroundList />} />
        <Route path='/ground/:id' element={<GroundTest />} />
        <Route path='/:author/post/:post' element={<GroundDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;