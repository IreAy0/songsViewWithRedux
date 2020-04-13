/* eslint-disable import/prefer-default-export */
// Action creator
export const selectSong = (song) => ({
  type: 'SONG_SELECTED',
  payload: song,
  // code above returns an action. importing as {selectsong}
  // means its a named export, while without the braces is
  // ult export

});
