
import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom'; //them

const App = () => {


  return (
    <div className="app-container">

      <Header />

      <div>
        test Link
        <div>
          <button>
            <Link to="/Users">Goto user Page</Link>
          </button>
          <button>
            <Link to="/Admins">Goto Admin Page</Link>
          </button>
        </div>
      </div>


    </div>
  );
}



export default App;
