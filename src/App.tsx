import './App.css';
import { Header } from './component/compound';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from './view/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView/>,
  },
]);

function App() {
  return (
    <>
      <Header/>
      <main className='pt-[74px]'>
        <RouterProvider router={router}/>
      </main>
    </>
  );
}

export default App;
