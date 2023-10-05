import { Route, Routes } from 'react-router-dom';
import './App.css';
// -------------Hook------------------
import Hook from './components/useEffect/hooks';
// -------------Pages------------------
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound/NotFound';
import UseStateLayout from './pages/useStates/UseStateLayout';
import UseEffectLayout from './pages/useEffects/UseEffectLayout';
import Home from './pages/home/Home';
// -------------useEffects------------------
import LearnApi from './components/useEffect/learn_1/learn_1';
import ScrollProgress from './components/useEffect/learn_2/learn_2';
import SearchApi from './components/useEffect/learn_exam/learn_exam';
import Routers from './routers';

function App() {
  return (
    <>
      {/* <Hook /> */}
      <div>
        <Routers />
        {/* <div>
          <Routes> */}
        {/* Home */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* useState */}
        {/* <Route path="/usestate" element={<UseStateLayout />} /> */}
        {/* useEffects  */}
        {/* <Route path="/useeffects">
              <Route index element={<UseEffectLayout />} />
              <Route path="learn1" element={<LearnApi />} />
              <Route path="learn2" element={<ScrollProgress />} />
              <Route path="learn_exam" element={<SearchApi />} />
            </Route> */}
        {/* NotFound  */}
        {/* <Route path="*" element={<NotFound />} />
          </Routes> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
