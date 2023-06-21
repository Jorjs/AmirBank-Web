import './css/App.css';
import './css/Slider.css';
import './css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Slider } from "./components/Slider";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Slider/>

        </div>   
  );
}

export default App;
