import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ReactPlayer from 'react-player/lazy'

export class Info extends Component {
  static propTypes = {
    video: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="video-info">
        <ReactPlayer url='http://192.168.31.170:8080/image/b9e25513ad63422bbd64e388343eb25a.mp4' playing={true} />
        <ReactPlayer url='http://192.168.31.170:8080/image/f4bcaf83101243788f90b72f4f9eb4e8.mp4' playing={true} controls={true} />

        {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}

      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    video: state.video,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
