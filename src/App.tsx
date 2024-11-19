import './App.css';
import CounterTwo from './components/counterTwo/CounterTwo';

function App() {
  return (
    <div className="App">
      <CounterTwo count={0}
      handleIncrement={() => console.log('+')}
      handleDecrement={() => console.log('-')}
      />
    </div>
  );
}

export default App;
