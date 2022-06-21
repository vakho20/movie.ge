import { Link , Route , BrowserRouter , Switch} from "react-router-dom";
import "./App.css"
import Search from "./search";
import Name from "./about";
import Homepage from "./homepage";
import Error from "./404";
import { useDispatch, useSelector } from "react-redux"
function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return ( 
    <div className="maindiv">
          <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
         <div className="">{counter}</div> 
          <BrowserRouter>
            <div className="width"> <a href="/" id="l" ><img src="https://movie.ge/theme/assets/img/logo.svg" alt="logo" width="200px"/></a></div> 
               
                     <Link to="/" onClick={fetch} ><div className="left"> Home Page</div></Link>
                     <Link to="/about"><div className="left">About</div></Link>
                     <Link to="/search"><div className="left">Search</div></Link> 
               
                   <Switch>
                     <Route exact path="/" component={Homepage} />
                     <Route exact path="/about" component={Name} />
                     <Route exact path="/search" component={Search} />
                     <Route exact path= "*"   component={Error}/>
                   </Switch> 
          </BrowserRouter>          
    </div>
  );
}
export default App;
