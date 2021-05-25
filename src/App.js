
import './styles/style.css';
import NavBar from './Components/NavBar'
import HomeBodyContent from './Components/HomeBodyContent'
import HomeBottomContent from './Components/HomeBottomContent'

function App() {
  return (
    <div className="homePageParent">
      <NavBar/>
      <HomeBodyContent/>
      <HomeBottomContent/>
    </div>
  );
}

export default App;
