import logo from './logo.svg';
import './App.css';
//import NavBar from './Components/navbar';
import NavBar from './Components/NavTop';
import Home from './Components/Home';
import Player from './Components/Player';
import VideoDesc from './Components/VideoDesc';
import Comments from './Components/Comments';
function App() {
    return (
        <div className="App">
            {/* <VideoDesc views={100} likes={100} title={'Halo'} desc={'Hello'} by={'Me'} date={'27/10/2023'}/> */}
            <Comments/>
        </div>
  );
}

export default App;
