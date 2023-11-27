
import './App.css'
import { Loginpage } from './assets/Components/Loginpage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Brand_and_Categories from './assets/Components/Brand_and_Categories'

import Header from './assets/components/header'
import { Inventories } from './assets/Components/Inventories'


import { Next } from './assets/Components/Next'
import Product from './assets/Components/Product'
import Engineer from './assets/Components/Engineer'
import Product_ordering from './assets/Components/Product_ordering'
import Problem from './assets/Components/Problem'
import { Next2 } from './assets/Components/Next2'
import Engineer2 from './assets/Components/Engineer2'

function App() {
  

  return (
      <div className='App'>
        <Header/>
        <BrowserRouter>
        <Routes>
          <Route path= '/assets/Components/Loginpage' element={<Loginpage/>}/>
          <Route path= '/assets/Components/Brand_and_Categories' element={<Brand_and_Categories/>}/>
          <Route path='/assets/Components/Inventories' element={<Inventories/>}/>
         
          <Route path='/assets/Components/Next2' element={<Next2/>}/>
          <Route path='/assets/Components/Next' element={<Next/>}/>
          <Route path='/assets/Components/Product' element={<Product/>}/>
          <Route path='/assets/Components/Engineer' element={<Engineer/>}/>
          <Route path='/assets/Components/Engineer2' element={<Engineer2/>}/>
          <Route path='/assets/Components/Product_ordering' element={<Product_ordering/>}/>
          <Route path='/assets/Components/Problem' element={<Problem/>}/>
        </Routes>
        </BrowserRouter>
        
     
      
     
      

      </div>
       
  )
}

export default App
