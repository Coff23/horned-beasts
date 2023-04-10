import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer author={"Joshua Coffey"}/>
    </div>
  );
}

export default App;
