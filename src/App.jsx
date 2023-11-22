
import './App.css'
import { Loginpage } from './assets/Components/Loginpage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Brand_and_Categories from './assets/Components/Brand_and_Categories'

import Header from './assets/components/header'

function App() {
  

  return (
      <div className='App'>
        <Header/>
        <BrowserRouter>
        <Routes>
          <Route path= '/assets/Components/Loginpage' element={<Loginpage/>}/>
          <Route path= '/assets/Components/Brand_and_Categories' element={<Brand_and_Categories/>}/>
        </Routes>
        </BrowserRouter>
        
     
      
     
      

      </div>
       
  )
}

export default App
