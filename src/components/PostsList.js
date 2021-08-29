import React, { Component } from 'react';
import propTypes from 'prop-types';
export default class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post, index) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://image.flaticon.com/icons/png/512/456/456212.png"
                  alt="user"
                />
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a min ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>
              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://image.flaticon.com/icons/png/512/633/633991.png"
                    alt="like"
                  />
                  <span>{post.likes.length}</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    src="https://image.flaticon.com/icons/png/512/2462/2462719.png"
                    alt="comment"
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="start typing a comment" />
              </div>
              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">bill</span>
                    <span className="post-comment-time">45 min ago</span>
                    <span className="post-comment-likes">12</span>
                  </div>
                  <div className="post-comment-content">random comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: propTypes.array.isRequired,
};
