import { combineReducers } from 'redux';

const songsReducer = () => [
  { title: 'Gimme love', duration: '4: 05' },
  { title: 'All Star', duration: '3: 05' },
  { title: 'Begining', duration: '2: 30' },
  { title: 'Beautful in White', duration: '4: 05' },
];

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
