import React from 'react';
import store from './configureStore'
import { Provider } from 'react-redux'
import CommentList from './components/CommentList';
import { addComment } from './actions/comments';

store.dispatch(addComment({ _id: '1', username: 'Van de Castro', comment: 'Great job Akelina, this video is really educational and interesting. As soon as I get the chance I will come certainly find in NYC to visit your Microsurgery Lab', userPic: 'http://mhalabs.org/wp-content/uploads/upme/1451456913_brodie.jpg' }))
store.dispatch(addComment({ _id: '2', username: 'John Doe', comment: 'Good read!', userPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTuRFLqV8ks7VwHnUs72USZpqvZWntro_Jv3_geCQdOz1C4S3' }))
store.dispatch(addComment({ _id: '3', username: 'Jane Doe', comment: 'Great Post!', userPic: 'http://www.venmond.com/demo/vendroid/img/avatar/big.jpg' }))

const state = store.getState();
console.log(state)

function App() {
  return (
    <div>
    <Provider store={store}>
      <CommentList />
    </Provider>
    </div>
  );
}

export default App;
