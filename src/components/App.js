import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import fetchPosts from '../actions/posts';
import { Home, Navbar, Page404, Login } from '.';
import PropTypes from 'prop-types';

// const Login = () => <div>Login</div>;

const Signup = () => <div>SignUp</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    console.log('PROPS', this.props);
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home posts={posts} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
