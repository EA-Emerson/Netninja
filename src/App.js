import Navbar from './navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home';
import Create from './create';
import BlogDetails from './blogdetails';
import NotFound from './notfound';
// npx json-server --watch data/db.json --port 8000
function App() {
  
  return (
        <div className="content">

          <Router>

            <Navbar/>

            <Routes>

              <Route exact path='/' element={<Home/>}/>
        
              <Route path='/create' element={<Create/>}/>
            
              <Route path='/blogs/:id' element={<BlogDetails/>}/>
    
              <Route path='*' element={<NotFound/>}/>

            </Routes>

        </Router>

      </div>
    
  )
}

export default App;
