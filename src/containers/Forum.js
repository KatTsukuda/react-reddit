import React, { Component } from 'react';
import Thread from '../components/Thread';
import $ from 'jquery-ajax';

class Forum extends Component {
  constructor(props) {
    super(props)
    this.state = {
    threads: []
    }
  }
  componentDidMount() {
    $.get("https://www.reddit.com/r/pancakes.json")       // request json from reddit
    .then((res) => {                // wait for response...
      console.log('bublaban', res)
      this.setState({               // update internal state
        threads: res.data.children
      })
    }
    );
  }
  render() {
    return (
      <div>
        <h1>The { this.props.params.forum_name } Subreddit</h1>
        { this.state.threads.map((thread) => <Thread title={thread.data.title} />) }
      </div>
    );
  }
}

export default Forum;
