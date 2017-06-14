import React, { Component } from 'react';

class Forum extends Component {
  render() {
    let threads = ["Proper way to eat a pie?", "Cheese & Potato Bear Pie"];

    return(
      <div>
        <h1>The { this.props.params.forum_name } Subreddit</h1>
        { threads.map((title) => <p>{title}</p>) }
      </div>
    );
  }
}

export default Forum;
