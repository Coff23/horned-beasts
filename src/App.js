import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
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
