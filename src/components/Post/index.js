import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getAllPosts } from "../../redux/actions/postAction";
import { Card, Button } from "react-bootstrap";

export default function Post({ post }) {
  const [img, setImg] = useState();
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log(post);
    if (post !== undefined) {
      setDescription(() => {
        const lastSymb = post.description.indexOf(" ", 120);
        console.log(lastSymb);
        return post.description.substring(0, lastSymb);
      });
    }
  }, []);

  return (
    <Card className="bg-dark text-white" style={{ width: "18rem" }}>
      <Card.ImgOverlay>
        <Card.Text className="grayStr">created by</Card.Text>
        <Card.Title>{post.created_by.display_name}</Card.Title>
        <Card.Img></Card.Img>
        <Card.Text>{post.name}</Card.Text>
        <Card.Text>{description}...</Card.Text>
      </Card.ImgOverlay>
      <Card.Footer>
        <div className="footer">
          <div>
            <Card.Text className="grayStr">available</Card.Text>
            {post.quantity_available} of {post.quantity}
          </div>
          <div>
            <Card.Text className="grayStr">price</Card.Text>
            {post.initial_price} ETH
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}
