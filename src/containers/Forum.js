import React, { Component } from 'react';
import Thread from '../components/Thread';

class Forum extends Component {
  constructor(props) {
    super(props)
    this.state = {
    thread_titles: ["Proper way to eat a pie?", "Cheese & Potato Bear Pie"]
    }
  }
  render(){
    return(
      <div>
        <h1>The { this.props.params.forum_name } Subreddit</h1>
        { this.state.thread_titles.map((title) => <Thread title={title} />) }
      </div>
    );
  }
}

export default Forum;
