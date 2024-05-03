import Button from "react-bootstrap/Button";

const BlogCard = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const getUser = () => {
    fetch(URL)
      .then((response) => 
        {
          if(!response.ok) {
           throw new Error('network response was not ok')
        }
        return response.json()
      }
    )
      .then((data) => console.log(data))
      .catch((error) => console.error("error:", error));
  };

  return (
    <div>
      <Button onClick={getUser}>Tikla</Button>
    </div>
  );
};

export default BlogCard;
