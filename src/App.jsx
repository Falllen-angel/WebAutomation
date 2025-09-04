import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Header from './Header.jsx';
import Main from './Main.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
