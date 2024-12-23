import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/i-github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/amr-ahmed682003/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100009582705852&mibextid=JRoKGi"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/AmrAhmed68"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
