import React from 'react';
import SongList from './components/songList';
import SongDetail from './components/songDetail';
import './App.css';

function App() {
  return (
    <div className="ui App-header container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>

    </div>
  );
}

export default App;
