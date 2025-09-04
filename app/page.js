// app/page.js
'use client';

import { useEffect } from 'react';
import { createFrames } from '@frames.js/render';

const frames = createFrames({
  baseUrl: 'https://tap-tap-miniapp.vercel.app/',
});

export default function TapTapMiniapp() {
  useEffect(() => {
    async function initialize() {
      try {
        // Simulate game initialization
        console.log('Initializing Tap Tap Miniapp...');
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock delay
        // Signal that the app is ready
        frames.actions.ready();
        console.log('App is ready');
      } catch (error) {
        console.error('Initialization failed:', error);
      }
    }
    initialize();
  }, []);

  return (
    <div>
      <h1>Tap Tap Miniapp</h1>
      <p>Tap to earn points and challenge your friends!</p>
      {/* Add your game UI here */}
    </div>
  );
}
