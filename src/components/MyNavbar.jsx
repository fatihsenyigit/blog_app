import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { PiBellRingingFill } from "react-icons/pi";
import { AiFillAppstore } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { CgCircleci } from "react-icons/cg";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="d-flex align-items-center">
          <CgCircleci className="me-2 text-danger" />
          <Navbar.Brand href="#">Blog App</Navbar.Brand>
        </div>
        <div className="d-flex align-items-center gap-1">
          <p className="p-1 me-3 m-1 position-relative">
            Posts
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
            </span>
          </p>
          <PiBellRingingFill />
          <AiFillAppstore />
          <FaUser />
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
