import './App.css';

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Work from './components/Work';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App" style ={{backgroundImage: `url("https://source.unsplash.com/collection/4540043/1600x900")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',backgroundPosition: 'center' }}>
      <div className="content" >
        <Navbar />
        <main className= "container" >
          <AboutMe />
          <Work />
          <ContactMe />
        </main>
        <Footer />  
      </div>
    </div>
  );
}

export default App;
