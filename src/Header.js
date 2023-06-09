import {NavLink} from "react-router-dom"


function Header() {
    return (
      <div className="navbar">

    <div className="navbar2">


      <li>
         <NavLink classname = 'home' to = "/">  Home </NavLink>
      </li>

      <li>
         <NavLink classname = 'offer' to = "/offer">  offer </NavLink>
      </li>
      
      <li>
         <NavLink classname = ' men' to = "/men">  men </NavLink>
      </li>

      <li>
         <NavLink classname = ' women' to = "/women">  women </NavLink>
      </li>

      <li>
         <NavLink classname = ' kids' to = "/kids">  kids </NavLink>
      </li>

      <li>
         <NavLink classname = ' contact' to = "/contact"> contact us</NavLink>
      </li>

     </div>
     


      </div>
    );
  }
  
  export default Header;
  