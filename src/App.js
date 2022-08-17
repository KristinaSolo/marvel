
import './App.css';
import Marvel from './components/Marvel';
import { supers } from './components/data/supers';

function App() {
  return (
    <div className='App'>
      {
        supers.map((superr) => 
        <Marvel nickname={superr.nickname} img={superr.img} universe={superr.universe} alterego={superr.alterego} activity={superr.activity} friends={superr.friends} superpowers={superr.superpowers}/>
        )
      }
    </div>
  );
}

export default App;
