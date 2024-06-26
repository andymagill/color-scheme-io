import React from 'react';
import Hero from './components/hero'; 
import SchemeList from './components/scheme-list'; 
import ToolTray from './components/tool-tray'; 
import ColorSwatchBanner from './components/color-swatch-banner';

const Homepage = () => {
  return (
    <>
      <main className="">
        <Hero heroImage='/images/hero/mural-3.jpg' >
            <h1 className='bold text-2xl'>Welcome to ColorScheme.io</h1>
            <p>Select the best color&nbsp;scheme for your next&nbsp;project. Get&nbsp;inspired by an endless collection of user created color&nbsp;schemes. </p>
        </Hero>

        <ColorSwatchBanner />

        <SchemeList title="Explore Color Schemes" />
      </main>

      <ToolTray />
    </>
  );
};

export default Homepage;
