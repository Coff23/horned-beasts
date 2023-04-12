import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Main from "./components/Main"
import Footer from './components/Footer';
import './App.css';
import imageUrls from './beasts.json';

function App() {
  return (
    <>
      <Header title="Beast Judge" />
      <Main message="Make Your Beast Opinion Known" imageUrls={imageUrls} />
      <Footer author="Joshua Coffey" />
    </>
  );
}

export default App;
