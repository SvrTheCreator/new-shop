import { ShopContextProvider } from './context/shop-context'
import { BrowserRouter } from 'react-router-dom'
import Applayout from './component/layout/AppLayout'
// import AllItems from './component/AllItems'
// import AppContent from './component/layout/AppContent'

export default function App() {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <Applayout />
      </ShopContextProvider>
    </BrowserRouter>
  )
}
