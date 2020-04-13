/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class songList extends PureComponent {
  renderList() {
    // const { songs } = songs;
    return this.props.songs.map((song) => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button type="button" className="ui button primary">
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
const mapStateToProps = (state) => ({ songs: state.songs });
export default connect(mapStateToProps)(songList);
