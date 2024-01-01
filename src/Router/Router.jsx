
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

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/jobs",
                element: <Jobs />
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
                element: <Favorite />
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
        path: "*",
        element: <NotFound />,
    },
])

export default Router;