import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import RoutesComp from './components/Router';

function App() {
  return (
    <div className="App">
        <Header />
        <RoutesComp />
    </div>
  );
}

export default App;
