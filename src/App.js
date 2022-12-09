import './App.css';
import header from './assets/header.png';
import ReactDOM from 'react-dom/client';
import weyLogo from './assets/wey-logo.png';
import useWindowDimensions from './hooks/useWindowsDimensions';
import {
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';

import { AboutScreen } from './screens/AboutScreen';

import { BridgeBannerScreen } from './screens/BridgeBannerScreen';

function App() {
    return (
        <Routes>
            <Route path='/' element={HomeScreen()} />
            <Route path='about' element={AboutScreen()} />
            <Route path='/banner/bridge' element={BridgeBannerScreen()} />
        </Routes>
    );
}

export default App;
