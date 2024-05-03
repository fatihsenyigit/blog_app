import { useState } from "react";
import { Container,Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CiSquareRemove } from "react-icons/ci";

const BlogCard = () => {
  // const URL = "https://jsonplaceholder.typicode.com/posts";
  const [blogs, setBlogs] = useState();

  const getUser = () => {
    
    fetch(process.env.REACT_APP_URL)
      .then((response) => 
        {
          if(!response.ok) {
           throw new Error('network response was not ok')
        }
        return response.json()
      }
    )
      .then((data) => setBlogs(data))
      .catch((error) => console.error("error:", error));
  };

  const handleRemove = (item) => {
    setBlogs(blogs.filter((e)=> e!==item))
  }

  return (
    <div className="">
      <Button onClick={getUser}>Tikla</Button>
      <Container className="">
        <Row className="d-flex flex-wrap g-3">
          {blogs?.map((item, index) => (
            <Card key={item.id} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between ">
                  <h5 className=" text-truncate">{item.title}</h5>
                  <h5>
                    <CiSquareRemove onClick={()=>handleRemove(item)} className="text-danger ms-3 removeBtn" />
                  </h5>
                </Card.Title>
                <Card.Text className="textBody">{item.body}</Card.Text>
                <Button className="" variant="success">
                  details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogCard;
