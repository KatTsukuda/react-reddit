import React, { Component } from 'react';
import Thread from '../components/Thread';
import ForumModel from '../models/ForumModel'

class Forum extends Component {
  constructor(props) {
    super(props)
    this.state = {
    threads: []
    }
  }
  fetchForumData(subreddit) {
    ForumModel
      .fetchThreads(subreddit)    // request json from reddit
      .then(function(newThreads) {    // wait for response
        this.setState({   // update internal state
          threads: newThreads
        })
      }.bind(this));
    }
  componentDidMount() {
    this.fetchForumData(this.props.params.forum_name);
  }
  componentWillReceiveProps(nextProps) {
    // we can't use `this.props` because we do not want to see what the current/old forum_name is
    // we want to see what CHANGED. That means we have to use nextProps instead.
    this.fetchForumData(nextProps.params.forum_name);
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
