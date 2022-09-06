import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
      <Info />
      <About />
      {/* <Interests /> */}
      <Footer />
          
        
      </header>
    </div>
  );
}

export default App;
