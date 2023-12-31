
import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Home from '../Pages/Home/Home';
import Jobs from '../Pages/Jobs/Jobs';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Favorite from '../Pages/Favorite/Favorite';
import Signup from './../Pages/Profile/Signup';
import Signin from './../Pages/Profile/Signin';
import NotFound from '../Pages/NotFound/NotFound';
import DetailsModal from '../Pages/Jobs/DetailsModal';
import axios from 'axios';
import AddJob from '../Components/AddJob/AddJob';
import PrivateRoutes from './PrivateRoutes';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        id: "root",
        loader: () =>{
            return axios.get(`http://localhost:9000/jobs`)
        },
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/jobs",
                element: (
                    <PrivateRoutes>
                        <Jobs />
                    </PrivateRoutes>
                )
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/favorite",
                element: <Favorite />,
                loader: ({params}) =>  fetch(`http://localhost:9000/jobs/${params.id}`)
            },
            {
                path: "/addjob",
                element: <AddJob />
            },
        ]
    },
  
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Signin />,
    },
    {
        path: "/details/:id",
        element: <DetailsModal/>,
        loader: ({params}) =>  fetch(`http://localhost:9000/jobs/${params.id}`)
    },
    
    {
        path: "*",
        element: <NotFound />,
    },
])

export default Router;