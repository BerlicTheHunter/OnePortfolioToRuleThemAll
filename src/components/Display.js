import React ,{useState} from 'react';
import Navbar  from './Navbar';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Work from './pages/Work';
import Footer from './Footer';



export default function Display() {
const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderDisplay = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return(
  <div className="App" style ={{backgroundImage: `url("https://source.unsplash.com/collection/4540043/1600x900")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',backgroundPosition: 'center' }}>
  <div className="content" >
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
    <main className= "container" >
      {renderDisplay()}
    </main>
    <Footer />  
  </div>
  </div>
  )
}