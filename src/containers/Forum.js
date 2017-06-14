import React, { Component } from 'react';

class Thread extends Component {
  render() {
    return (<p>{this.props.title}</p>);
  }
}

class Forum extends Component {
  render() {
    let threads = ["Proper way to eat a pie?", "Cheese & Potato Bear Pie"];

    return(
      <div>
        <h1>The { this.props.params.forum_name } Subreddit</h1>
        { threads.map((title) => <Thread title={title} />) }
      </div>
    );
  }
}

export default Forum;
