import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CiSquareRemove } from "react-icons/ci";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";

const BlogCard = ({ blogs, setBlogs }) => {
  const handleRemove = (item) => {
    setBlogs(blogs.filter((e) => e !== item));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(blogs?.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const getVisibleBlogs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, blogs?.length);
    return blogs?.slice(startIndex, endIndex);
  };

  const renderPaginationItems = () => {
    const pageNumbers = [];

    if (totalPages > 1) {
      const visiblePageCount = 3;

      const showLeftEllipsis = currentPage > visiblePageCount - 1;
      const showRightEllipsis = currentPage < totalPages - visiblePageCount;
      if (currentPage <= visiblePageCount) {
        for (
          let number = 1;
          number <= Math.min(visiblePageCount, totalPages);
          number++
        ) {
          pageNumbers.push(
            <Pagination.Item
              key={number}
              active={number === currentPage}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </Pagination.Item>,
          );
        }
        if (showRightEllipsis) {
          pageNumbers.push(<Pagination.Ellipsis key="ellipsisAfter" />);
        }
      } else if (currentPage >= totalPages - visiblePageCount + 1) {
        if (showLeftEllipsis) {
          pageNumbers.push(<Pagination.Ellipsis key="ellipsisBefore" />);
        }
        const startPage = Math.max(totalPages - visiblePageCount + 1, 1);
        for (let number = startPage; number <= totalPages; number++) {
          pageNumbers.push(
            <Pagination.Item
              key={number}
              active={number === currentPage}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </Pagination.Item>,
          );
        }
      } else {
        if (showLeftEllipsis && currentPage !== 2) {
          pageNumbers.push(<Pagination.Ellipsis key="ellipsisBefore" />);
        }

        const middlePage = currentPage;
        const minPage = Math.max(
          middlePage - Math.floor(visiblePageCount / 2),
          1,
        );
        const maxPage = Math.min(minPage + visiblePageCount - 1, totalPages);
        for (let number = minPage; number <= maxPage; number++) {
          pageNumbers.push(
            <Pagination.Item
              key={number}
              active={number === currentPage}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </Pagination.Item>,
          );
        }

        if (showRightEllipsis && currentPage !== (totalPages - 1)) {
          pageNumbers.push(<Pagination.Ellipsis key="ellipsisAfter" />);
        }
      }
    }

    return pageNumbers;
  };

  const visibleBlogs = getVisibleBlogs();

  return (
    <div className="">
      <Container className="d-flex flex-column align-items-center">
        <Row xs={1} sm={2} md={3} lg={4} className=" ">
          {visibleBlogs?.map((item, index) => (
            <Col
              key={item.id}
              className="d-flex justify-content-center align-items-center mb-3"
            >
              <Card style={{ width: "18rem" }}>
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
        {totalPages > 1 && ( // Render pagination only if there are multiple pages
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {renderPaginationItems()}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
            <Pagination.Last onClick={() => handlePageChange(totalPages)} />
          </Pagination>
        )}
      </Container>
    </div>
  );
};

export default BlogCard;
