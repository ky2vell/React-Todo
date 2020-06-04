import React from 'react';

const ThemeSwitch = () => {
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <div className='theme-switch-wrapper'>
      <strong>Light</strong>
      <label className='theme-switch' htmlFor='checkbox'>
        <input type='checkbox' id='checkbox' onChange={switchTheme} />
        <div className='slider round'></div>
      </label>
      <strong>Dark</strong>
    </div>
  );
};

export default ThemeSwitch;
