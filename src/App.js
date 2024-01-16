
import Navbar from './navbar';
import Home from './Home';
import Create from './Create';
import BlogDetail from './BlogDetail';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  const title='welcome to the new blog'
  return (
    <Router>
      <div className="App">
        <Navbar/>
        
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/create'>
            <Create></Create>
            </Route>
            <Route path="/blog/:id">
              <BlogDetail></BlogDetail>
            </Route>
        </Switch>
          
    

        </div>
      
      </div>
    </Router>
   
  );
}

export default App;
