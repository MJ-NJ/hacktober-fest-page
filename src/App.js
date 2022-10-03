
import './App.css';
import Landing from './components/landingpage/landing'
import Binary from './components/binary/binary'
import About from './components/aboutus/about';
import Card from './components/cards/cards';
import Footer from './components/footer/footer';
// import Header from './components/navbar/navbar';
function App() {
  return (
    <>
    <Binary/>
    {/* <Header></Header> */}

    <Landing/>
    <About></About>
    <Card></Card>
    <Footer></Footer>
    </>
  );
}

export default App;
