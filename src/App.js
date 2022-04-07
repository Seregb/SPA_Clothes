import "./App.css";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostsThunk } from "./redux/thunk/ThunkPosts";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  const allPosts = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostsThunk());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* Просто чтобы была ссылка на домашнюю */}
        <Link to="/"> Explore</Link>
      </header>
      <Container>
        {allPosts.data?.products.map((post) => (
          <Post post={post} />
        ))}
      </Container>
    </div>
  );
}

export default App;
