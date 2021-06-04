import {Container} from '@material-ui/core';
import Routes from '../routes/Routes';
import SideBar from '../routes/SideBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Routes />
        <SideBar />
      </Container>
    </div>
  );
}

export default App;
