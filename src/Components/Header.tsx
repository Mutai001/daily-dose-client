// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <header className="header p-4">
      <h1 className="text-3xl font-bold">DailydoseKE</h1>
      <nav>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/about" className="mr-4">
          About
        </Link>
      </nav>
      <Button className="button">Subscribe</Button>
    </header>
  );
};

export default Header;
