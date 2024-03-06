import React, { useEffect } from 'react';
import ResumeGrid from './components/ResumeGrid';
import './App.css'

const addGlow = () => {
  const glow = document.createElement('div');
  glow.classList.add('glow');
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.pageX + 'px';
    glow.style.top = e.pageY + 'px';
  });
};

const removeGlow = () => {
  const glow = document.querySelector('.glow');
  if (glow) {
    document.body.removeChild(glow);
  }
};

export default function App() {
  useEffect(() => {
    addGlow();
    return () => removeGlow();
  }, []);

  return (
    <>
      <ResumeGrid />
    </>
  );
}
