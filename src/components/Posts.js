import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        }
    }


    componentWillMount() {
        console.log('posts component did mount');
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://jsonplaceholder.typicode.com/posts'

        //fetch('https://jsonplaceholder.typicode.com/posts')
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(data => this.setState({posts: data}));
    }

    render() {
        const postItems = this.state.posts.map(post => (
            <div className="card mb-1" key={post.id}>
                <h5 className="card-header">{post.title}</h5>
                <p className="p-2">{post.body}</p>
            </div>

        ));
        return (
            <div>
                <h3>Posts</h3>
                {postItems}
            </div>
        );
    }
}

export default Posts;
