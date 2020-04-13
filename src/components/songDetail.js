/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const songDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Select a song </div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title:
        {mySelectedSong.title}
      </p>
      <p>
        Duration:
        {mySelectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({ mySelectedSong: state.selectedSong });
export default connect(mapStateToProps)(songDetail);
