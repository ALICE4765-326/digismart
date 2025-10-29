import React from 'react';
import { Hero } from '../components/Hero';
import { Solutions } from '../components/Solutions';
import { Features } from '../components/Features';
import { Advantages } from '../components/Advantages';
import { CaseStudies } from '../components/CaseStudies';

export const Home = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <Features />
      <Advantages />
      <CaseStudies />
    </>
  );
};