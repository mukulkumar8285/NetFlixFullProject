
import './App.css';
import Body from './components/Body';
import { Toaster } from 'react-hot-toast';
import AlertDialog from './components/MovieDialog';

function App() {
  return (
    <div className="">
      <Body/>
      <Toaster/>
      <AlertDialog/>
    </div>
  );
}

export default App;
