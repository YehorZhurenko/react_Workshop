import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Planets from './components/planets/Planets';
import RecruitsList from './components/recruits/RecruitsList';
import AstronautsList from './components/astronauts/AstronautsList';
import CssPractiseComp from './components/other/CssPractiseComp';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} exact path="/">
      <Route element={<Planets />} path="planets" />
      <Route element={<RecruitsList />} path="recruits" />
      <Route element={<AstronautsList />} path="astronauts" />
      <Route element={<CssPractiseComp />} path="css-practise" />
    </Route>,
  ),
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
