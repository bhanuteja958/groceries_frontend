import styles from  './App.module.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Navigation from './Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
