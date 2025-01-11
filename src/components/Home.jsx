import Spline from '@splinetool/react-spline';
import React from 'react';
export default function Home() {
  return (
    <main style={{ height: '100vh' }}> {/* Ensure a fixed height for the main container */}
      <Spline
        scene="https://prod.spline.design/WiooWo2Ku5toGigB/scene.splinecode"
        style={{ height: '90vh', width:'110vh' }} // Slightly taller than the viewport
      />
    </main>
  );
}
