import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/"  />
        <Route path="/cart"  />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
