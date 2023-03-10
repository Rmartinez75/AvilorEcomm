
import '../src/app.css'
import DealerHours from './components/DealerHours';
import Footer from './components/Footer';
import MapImg from './components/MapImg';
import NavBar from './components/NavBar';
import VehicleImg from './components/VehicleImg';



function App() {
  return (
    <div className="App">
      <NavBar />
      <VehicleImg />
      <DealerHours />
      <MapImg />
      <Footer />
    </div>
  );
}

export default App;
