import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p></p>
          <Link className = "pass" to = {`/${title}`} > see more {'>>'}</Link>
        </div>
      </div>
    </Col>
  )
}
