import React, { Component } from 'react';
import Posts from './Posts';
import PostForm from './Postform';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="mt-4 mb-4"><a href="https://www.youtube.com/watch?v=93p3LxR9xfM&t" target="_blank">
                  Redux with React Crash Course</a></h3>
                <div className="card bg-faded p-3 mb-4">
                  <PostForm />
                </div>
                <Posts />
            </div>
        );
    }
}

export default App;
