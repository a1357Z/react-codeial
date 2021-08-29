import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/posts';
import { PostsList } from './';
class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    console.log('called fethcposts');
  }

  render() {
    console.log('props', this.props);
    const {
      posts: { posts },
    } = this.props;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://image.flaticon.com/icons/png/512/149/149852.png"
              alt="search"
            />
            <input placeholder="search" />
            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/png/512/456/456212.png"
                    alt="user"
                  />
                  <span>John doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://image.flaticon.com/icons/png/512/456/456212.png"
                alt="user"
                id="user-dp"
              />
              <span>John doe</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>log in</li>
                <li>log out</li>
                <li>log register</li>
              </ul>
            </div>
          </div>
        </nav>
        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

const mapDispatchToProps = {
  fetchPosts,
};

App.propTypes = {
  posts: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
