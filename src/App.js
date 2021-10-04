import logo from './logo.svg';
import data from './Data'
import './App.css';
import { MovieList } from './MovieList';

function App() {
    return (

        <div className="App" >
            <h1 id='title' > Movie App </h1>
            <MovieList data={data} />
        </div>
    );
}
export default App;