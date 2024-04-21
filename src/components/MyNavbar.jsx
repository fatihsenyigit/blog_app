import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { PiBellRingingFill } from "react-icons/pi";
import { AiFillAppstore } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Blog App</Navbar.Brand>
        <div>
          <PiBellRingingFill /> <AiFillAppstore /> <FaUser />
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
