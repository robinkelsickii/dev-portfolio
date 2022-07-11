import './App.css';
import Navbar from './Components/Navbar';
import Splash from './Components/Splash'
import ProjectCatalogue from './Components/ProjectCatalogue'
import ParticleBg from './Components/ParticleBg';

function App() {
  return (
    <div className="App">
    {/* <Navbar /> */}
      <Splash />
      <div className="pages">
      <ParticleBg />
      {/* <ProjectCatalogue /> */}
      </div>
    </div>
  );
}

export default App;
