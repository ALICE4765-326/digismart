import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useMetaTags } from '../hooks/useMetaTags';

export const Layout = () => {
  useScrollToTop();
  useMetaTags();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}