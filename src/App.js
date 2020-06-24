import React from 'react';
import { Box } from '@chakra-ui/core';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Pricing } from './Pricing';
import { DataView } from './DataView';
import { SignUp } from './SignUp';
import { Login } from './Login';

function App() {
  return (
    <div>
      <Box mt="1rem">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/data" element={<DataView />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    </div>
  );
}
export default App;
