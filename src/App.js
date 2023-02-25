import "./App.css";
import Image from "./Components/Image/Image";
import Bio from "./Components/Bio/Bio";
import Contacts from "./Components/Contacts/Contacts";
import Info from "./Components/Info/Info";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Image />
          <Bio />
          <Contacts />
          <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
