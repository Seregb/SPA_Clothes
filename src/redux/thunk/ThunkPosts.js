import { getAllPosts } from "../actions/postAction";

export const PostsThunk = () => {
  return (dispatch) => {
    fetch("https://artisant.io/api/products")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(getAllPosts(data));
      });
  };
};
