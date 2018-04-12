import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts : []
    //     }
    // }


    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const postItems = this.props.posts.map(post => (
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

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
