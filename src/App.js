import Products from './Products';
import {Container} from '@material-ui/core';
import SideBar from './SideBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Products />
      </Container>
      <SideBar />
    </div>
  );
}

export default App;
