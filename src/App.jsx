import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout';
import DashRootLayout from './components/layouts/dashboard/Dashrootlyot';
import HomeIndex from "./pages/HomeIndex"
import AboutIndex from './pages/AboutIndex';
import ServiceIndex from './pages/serviceIndex';
import ProductIndex from './pages/ProductIndex';
import RecipeIndex from './pages/RecipeIndex';
import ErrorPage from "./components/common/Error"
import DashHomeindex from './pages/dashlayouts/DashHome';

const routerValue = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route element={<RootLayout/>}>
      <Route path='/' element={<HomeIndex/>}></Route>
      <Route path='/about' element={<AboutIndex/>}></Route>
      <Route path='/service' element={<ServiceIndex/>}></Route>
      <Route path='/products' element={<ProductIndex/>}></Route>
      <Route path='/recipes' element={<RecipeIndex/>}></Route>
    </Route>
    <Route element={<DashRootLayout/>}>
      <Route path='/dash' element={<DashHomeindex/>}></Route>
    </Route>
    <Route path='*' element={<ErrorPage/>}></Route>
  </>
)
);

function App() {

    return (
      <RouterProvider router={routerValue}/>
  );
}

export default App
