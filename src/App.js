
import './App.css';
import { Addtask, Addtodo } from './components/Addtask';
import { Edittask } from './components/Edittask';
import { Filtertask } from './components/FilterTask';
import { Tasklist } from './components/Tasklist';


function App() {
  return (
    <div className="App">
    <Addtask/>
    <Edittask/>
    <Filtertask/>
    <Tasklist  />
    </div>
  );
}

export default App;
