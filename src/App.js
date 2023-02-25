import "./App.css";

import Image from "./Components/Image/Image";
import Bio from "./Components/Bio/Bio";
import Contacts from "./Components/Contacts/Contacts";
import Info from "./Components/Info/Info";
import Social from "./Components/Social/Social";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card animate__animated animate__fadeInDown">
          <Image />
          <Bio />
          <Contacts />
          <Info />
          <Social />
        </div>
      </div>
    </div>
  );
}

export default App;
