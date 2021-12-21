import { useState } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
} from 'react-router-dom';


import CardsWindow from './components/CardsWindow/CardsWindow'
import CategoryInfo from './screens/CategoryInfo/CategoryInfo';
import LandingPage from './screens/LandingPage/LandingPage';
import ProductInfo from './screens/ProductInfo/ProductInfo';
import UpdatePage from './screens/UpdatePage/UpdatePage';

import styles from './styles/global.css'



function App() {
    const [count, setCount] = useState(0)

    return (
        // <LandingPage/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CategoryInfo />} />
                <Route path="products" element={<LandingPage/>}/>
                <Route path="products/:id" element={<ProductInfo/>}/>
                <Route path="update/:id" element={<UpdatePage/>}/>
                <Route path="new" element={<UpdatePage isNew={true}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
