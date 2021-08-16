import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Row, Col, Image } from 'antd';

import { handlePages, fetchVideos } from './redux/actions';


export class VideoList extends Component {
  static propTypes = {
    video: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    let _this = this;
    this.props.actions.fetchVideos(this.props.video.videoInfo.pagnation.currentPage, this.props.video.videoInfo.pagnation.size);
    window.onscroll = function () {
      //scrollTop就是触发滚轮事件时滚轮的高度
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      //console.log("滚动距离" + scrollTop);
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //console.log("可视高度" + windowHeight);
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      //console.log("总高度" + scrollHeight);
      //判断滚动条是否到底部
      if (scrollTop + windowHeight == scrollHeight) {
        //加载数据
        console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
        // var currentPage = ()
        _this.props.actions.handlePages(_this.props.video.videoInfo.pagnation.currentPage);
        _this.props.actions.fetchVideos(_this.props.video.videoInfo.pagnation.currentPage, _this.props.video.videoInfo.pagnation.size);
        // addData();
      }
    }
  }



  show = (video) => {
    var url = 'http://192.168.31.170:8080/image/' + video.videName;
    window.open(url, '_blank');
    // window.location.href = 'http://192.168.31.170:8080/image/' + video.videName;
  }

  render() {
    return (
      <div className="video-video-list">
        <Row>
          {this.props.video.videoInfo ? this.props.video.videoInfo.videos.map(item => (


            <Col key={item.videId} xs={{ span: 22, offset: 1 }} xl={{ span: 5, offset: 1 }} style={{ background: '#eff8ff', textAlign: "center" }} onClick={() => this.show(item)} >
              <Image
                // width={200}
                src={"http://192.168.31.170:8080/image" + item.imageSrc}
                height={300}
                fallback="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                preview={false}
              />
              <p>{item.videoOrignName}</p>
            </Col>

          )) : ""}
        </Row>
      </div >
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
    actions: bindActionCreators({
      handlePages,
      fetchVideos
    }, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);
