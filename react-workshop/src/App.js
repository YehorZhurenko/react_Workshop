import { Home } from './components/Home';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import planetsSlice from './redux/slices/planetsSlice';
import RecruitsList from './components/recruits/RecruitsList';
import AstronautsList from './components/astronauts/AstronautsList';
import CssPractiseComp from './components/other/CssPractiseComp';
import Planets from './components/planets/Planets';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import TamingHooks from './components/other/TamingHooks';
import TamingUseMemo from './components/other/TamingUseMemo';
import TamingUseCallback from './components/other/TamingUseCallback';
import TamingUseState from './components/other/TamingUseState';
import TamingUseReducer from './components/other/TamingUseReducer';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Home />} exact path="/">
        <Route element={<Planets />} path="planets" />
        <Route element={<RecruitsList />} path="recruits" />
        <Route element={<AstronautsList />} path="astronauts" />
        <Route element={<CssPractiseComp />} path="css-practise" />
        <Route element={<TamingHooks />} path="taming-hooks">
          <Route index element={<TamingUseState />} />
          <Route element={<TamingUseMemo />} path="taming-use-memo" />
          <Route element={<TamingUseCallback />} path="taming-use-callback" />
          <Route element={<TamingUseReducer />} path="taming-use-reducer" />
        </Route>
      </Route>,
    ),
  );

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
