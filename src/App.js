
import './App.scss';
import MyComponent from './components/MyComponent';
import SecondComponet from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import Test from './components/Test';
import EventDemo from './components/EventDemo';
function App() {
  return (
    <div>Hello World
      <MyComponent></MyComponent>
      <SecondComponet></SecondComponet>
      <ThirdComponent></ThirdComponent>
      <Test studentName = 'khanh' >deptrai</Test>
      <EventDemo></EventDemo>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
