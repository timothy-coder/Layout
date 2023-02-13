import {Link} from "react-router-dom"
import * as FaIcons from 'react-icons'
const Sidebar= () =>{
return(
<div className="sidebar">
    <ul>
        <li>
            <Link to="/"><FaIcons.FaHome/>Inicio</Link>
        </li>
        <li>
            <Link to="/reportes">Reportes</Link>
        </li>
        <li>
            <Link to="/usuarios">Usuarios</Link>
        </li>
    </ul>
</div>
);
}
export default Sidebar;