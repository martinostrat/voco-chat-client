import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/chat.css';
import { Container, Row, Col,  } from 'react-bootstrap';
import { ChatBox } from './components/ChatBox';

function App() {
  return (
    <Container className="background">
      <Row>
        <ChatBox/>
      </Row>
    </Container>
  );
}

export default App;
