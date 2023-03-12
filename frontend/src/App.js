import logo from './logo.svg';
import './App.css';
//import NavBar from './Components/navbar';
import NavBar from './Components/NavTop';
import Home from './Components/Home';
import Player from './Components/Player';
import VideoDesc from './Components/VideoDesc';
function App() {
    return (
        <div className="App">
            <VideoDesc props/>
        </div>
  );
}

export default App;
