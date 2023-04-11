import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import './App.css';
import Container from 'react-bootstrap/Container';
import imageUrls from './beasts.json';

function App() {
  return (
    <Container>
      <Header title="Beast Judge" />
      <Main message="Make Your Beast Opinion Known" imageUrls={imageUrls} />
      <Footer author="Joshua Coffey" />
    </Container>
  );
}

export default App;
