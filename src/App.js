import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.scss';
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import Home from "../src/pages/Home";
import Reportes from "../src/pages/Reportes";
import Usuarios from "../src/pages/Usuarios";
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <h1 className="text-3xl font-bold underline">Hola</h1>
        <div className="content">
          /*<Route path="/" exact={true} component={Home}/>
          <Route path="/reportes" exact={true} component={Reportes}/>
          <Route path="/usuarios" exact={true} component={Usuarios}/>*/
        </div>
      </div>
    </Router>
  );
}

export default App;
