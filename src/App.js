import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/quote';

function App() {
  return (
    <div className="main-container flex-center">
      <Calculator />
      <Quote />
    </div>
  );
}

export default App;
