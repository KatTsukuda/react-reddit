import React, { Component } from 'react';

class Thread extends Component {
  render () {
    return (
      <div className="thread">
        <h4>
        { this.props.thumbnail.startsWith("http") ? <img src={this.props.thumbnail} /> : <span className="placeholder"/> }
        <span>{this.props.title}</span>
        </h4>
      </div>
    );
  }
}

export default Thread;
