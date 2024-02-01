'use client';
import { ThemeContext } from '@client/context/ThemeContext';
import { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

function ThemeIcon() {
  const { theme, toggleLightDark } = useContext(ThemeContext);
  return (
    <div className="relative">
      <div>
        <button className="flex btn-icon" onClick={toggleLightDark}>
          {theme === 'dark' ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </button>
      </div>
      <ul></ul>
    </div>
  );
}

export default ThemeIcon;
