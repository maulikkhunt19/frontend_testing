import './App.css';
import Profile from './components/Profile';
import Counter from './components/Counter';
import FunctionEvent from './components/FunctionEvent';
import FunctionCounter from './components/FunctionalCounter';

function App() {
  return (
    <div className='App'>
      <Profile name='Maulik' lastname='Khunt' />
      <Counter counter='10' />
      <FunctionEvent></FunctionEvent>
      <FunctionCounter></FunctionCounter>
    </div>
  );
}

export default App;

