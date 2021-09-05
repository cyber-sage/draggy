import logo from './logo.svg';
import './App.css';
import Quarter from './component/Quarter';

function App() {
  return (
    <>
        <div className="div-head"><div><h1>Draggy</h1></div></div>
        <Quarter data="div1" last={false}/>
        <Quarter data="div2" last={false}/>
        <Quarter data="div3" last={true}/>
        <Quarter data="div4" last={false}/>
    
    </>

  );
}

export default App;
