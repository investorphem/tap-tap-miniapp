// app/page.js
'use client';

import { useEffect, useState } from 'react';
import { createFrames } from '@frames.js/render';

const frames = createFrames({
  baseUrl: 'https://tap-tap-miniapp.vercel.app/', // Replace with your Vercel URL after deployment
});

export default function TapTapMiniapp() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function initialize() {
      try {
        console.log('Initializing Tap Tap Miniapp...');
        // Mock initialization delay (replace with real asset loading if needed)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        frames.actions.ready(); // Signal to Farcaster that the app is ready (fixes splash screen)
        console.log('App is ready');
      } catch (error) {
        console.error('Initialization failed:', error);
      }
    }
    initialize();
  }, []);

  const handleTap = () => {
    setScore(score + 1);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Tap Tap Miniapp</h1>
      <p>Tap the button to earn points and challenge your friends on Farcaster!</p>
      <button 
        onClick={handleTap} 
        style={{ fontSize: '24px', padding: '20px', backgroundColor: '#4B0082', color: 'white', border: 'none', borderRadius: '10px' }}
      >
        Tap Me!
      </button>
      <p>Your Score: {score}</p>
      {/* Add more game features here, e.g., reset button or sharing */}
    </div>
  );
}
