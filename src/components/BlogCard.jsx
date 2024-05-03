import { useEffect, useState } from "react";
import { Col, Container,Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CiSquareRemove } from "react-icons/ci";

const BlogCard = () => {
  // const URL = "https://jsonplaceholder.typicode.com/posts";
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    getUser()
  }, [])
  

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
      <Container className="">
        <Row xs={1} sm={2} md={3} lg={4} className=" ">
          {blogs?.map((item, index) => (
            <Col className="d-flex justify-content-center align-items-center">
              <Card key={item.id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between ">
                    <h5 className=" text-truncate">{item.title}</h5>
                    <h5>
                      <CiSquareRemove
                        onClick={() => handleRemove(item)}
                        className="text-danger ms-3 removeBtn"
                      />
                    </h5>
                  </Card.Title>
                  <Card.Text className="textBody">{item.body}</Card.Text>
                  <Button className="" variant="success">
                    details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogCard;
