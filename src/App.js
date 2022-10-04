
import './App.css';
import Landing from './components/landingpage/landing'
import Binary from './components/binary/binary'
import About from './components/aboutus/about';
import Card from './components/cards/cards';
import Footer from './components/footer/footer';
import Sponsors from './components/sponsors/sponsors';
// import Header from './components/navbar/navbar';
function App() {
  return (
    <>
    <div className='alignItems'>
      <Binary/>
      <Landing/>
      <About></About>
      <Card></Card>
      <Sponsors></Sponsors>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
