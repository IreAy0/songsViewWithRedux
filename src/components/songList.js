/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class songList extends PureComponent {
  renderList() {
    // const { songs } = songs;
    return this.props.songs.map((song) => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            type="button"
            onClick={() => this.props.selectSong(song)}
            className="ui button primary"
          >
            select
          </button>
        </div>
        <div className="content">{ song.title }</div>
      </div>
    ));
  }

  render() {
    return (
      <div className="ui divided list">{ this.renderList() }</div>
    );
  }
}
// ()=>{return()} ==> ()=>({})
// selectSong ==> selectSong: selectSong
const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong })(songList);
