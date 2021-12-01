import './App.css';
import Home from './component/Home';
import Sidenav from './component/Sidenav';

function App() {
  return (
    <div className="App">
        <Sidenav />
        <Home/>
    </div>
  );
}

export default App;
