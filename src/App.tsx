import React from 'react';
import Post from './components/post';
import Comment from './components/comments';
import './App.css';

function App() {
  return (
    <div className={"mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y "}>

    
      <Post></Post>
      <Comment></Comment>

      
    </div>
  );
}

export default App;
