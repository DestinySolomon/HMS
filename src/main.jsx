import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HotelProvider } from "./store/HotelContext";

createRoot(document.getElementById('root')).render(
 <AuthProvider>

    <HotelProvider>

        <App/>

    </HotelProvider>

</AuthProvider>
)
