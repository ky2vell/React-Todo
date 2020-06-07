import React from 'react';

const ThemeSwitch = ({ toggleTheme }) => {
  return (
    <div className='theme-switch-wrapper'>
      <strong>Light</strong>
      <label className='theme-switch' htmlFor='checkbox'>
        <input type='checkbox' id='checkbox' onChange={toggleTheme} />
        <div className='slider round'></div>
      </label>
      <strong>Dark</strong>
    </div>
  );
};

export default ThemeSwitch;
