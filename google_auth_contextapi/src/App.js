import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
