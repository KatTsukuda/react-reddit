import $ from 'jquery-ajax';

// A ForumModel is actually more accurately a list of all Threads
// for a given Forum. We are using ForumModel.cache as a form of naive cacheing.
class ForumModel {
  static fetchThreads(subreddit) {
    let endpoint = `https://www.reddit.com/r/${subreddit}.json`;

    let promise = new Promise(function(resolve, reject) {

      let data = ForumModel.cache[endpoint];
      if (data) {
        // we already have the (cached) data from an earlier request
        // maybe it's stale, but we're going to return it anyway
        console.log("Using cached/stale data for", endpoint)
        return resolve(data);
      }

      $.get(endpoint)               // request json from reddit
       .then(                       // wait for response...
          function onSuccess(res) {
            let threads = res.data.children;
            ForumModel.cache[endpoint] = threads; // let's cache the response
            resolve(threads)
          }.bind(this),
          function onError(status) {
            console.log("Error requesting", endpoint, status);
            reject(status);
          }.bind(this)
       );

    });

    return promise;
  }
}
ForumModel.cache = {};

export default ForumModel;
