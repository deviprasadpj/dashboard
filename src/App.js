import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContentArea from './components/MainContentArea';
import Sidebar from './components/Sidebar';

const App = () => {
  return(
    <div>
      <Header />
      <div className=''>
        <Sidebar />
        <MainContentArea />
      </div>
      <Footer />
    </div>
  )
}

export default App;
