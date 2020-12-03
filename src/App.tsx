import React from 'react';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.app}>
      <header className={style.header}>HEADER</header>
      <div className={style.contentArea}>
        <h1>Hello</h1>
        <h2>Hello</h2>
        <h3>Hello</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid cupiditate ea eveniet obcaecati quae
          quasi reiciendis, suscipit. Aperiam, aut eius laboriosam nulla quia totam!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid cupiditate ea eveniet obcaecati quae
          quasi reiciendis, suscipit. Aperiam, aut eius laboriosam nulla quia totam!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid cupiditate ea eveniet obcaecati quae
          quasi reiciendis, suscipit. Aperiam, aut eius laboriosam nulla quia totam!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid cupiditate ea eveniet obcaecati quae
          quasi reiciendis, suscipit. Aperiam, aut eius laboriosam nulla quia totam!</p>
      </div>
      <footer className={style.footer}>FOOTER</footer>
    </div>
  );
}

export default App;
