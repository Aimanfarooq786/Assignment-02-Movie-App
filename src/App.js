import logo from './logo.svg';
import data from './Data'
import './App.css';
import { MovieList } from './MovieList';
//import cover1 from './Images/cover1.jfif'

function App() {

  return (

    <div className="App">
      <h1 id='title'>Movie App</h1>
      
      
      <div id="card1">
      <MovieList data={data} />
      </div>

  


    </div>
  );
}

export default App;
