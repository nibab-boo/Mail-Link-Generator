import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FormElement from './components/FormElement'
import OutputLink from './components/OutputLink'
import { useState } from 'react';

function App() {
  const [data, setData] = useState("");

  const getLink = (link) => {
    console.log("link", link);
    setData(link);
  }
  return (
    <div className="App">
      <div className="App-body">
        <h3>Generate Link</h3>
        <FormElement sendLink={getLink} />
        {
          data && (
            <OutputLink data={data}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
