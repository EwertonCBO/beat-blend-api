import React from 'react';

function Header() {
  return (
    <header>
      <h1>BeatBlend</h1>
      <nav>
        <ul>
          <li><a href="/feed">Feed</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
