import React, { Component } from 'react';

class Forum extends Component {
  render() {
    return(
      <h1>The { this.props.params.forum_name } Subreddit</h1>
    );
  }
}

export default Forum;
