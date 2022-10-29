  import './App.css'
  import { Link } from "react-router-dom";
  
  function rightPannel() {
return (
    <div className="container">
        <div className="left-panel">
            <ul>
                
                <li>
                    
                    <p>Muhamamd Anas Raza</p>
                </li>
              
                <li>
                <i><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" alt="" className="listItemsImage" />
                    </i>


                    <p>Friends</p>
                </li>
                <li>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" alt="" className="listItemsImage" />
                    <i></i>
                    <p>Videos</p>
                </li>
                <li>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" alt="" className="listItemsImage" />
                    <i></i>
                    <p>Pages</p>
                </li>
                <li>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="" className="listItemsImage" />
                <i></i>
                    <p>Groups</p>
                </li>
                
                <li>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png" alt="" className="listItemsImage" />
                <i></i>
                    <p>Inbox</p>
                </li>
                <li>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png" alt="" className="listItemsImage" />
                <i></i>
                    <p>Events</p>
                </li>
                <li>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" alt="" className="listItemsImage" />
                <i></i>
                    <p>Memories</p>
                </li>
                
                <li>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" alt="" className="listItemsImage" />
                <i></i>
                    <p>Jobs</p>
                </li>
                <li>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png" alt="" className="listItemsImage" />
                <i></i>
                    <p>Most recent</p>
                </li>
            </ul>

            {/* <div className="footer-links">
                 <a href="/">Privacy</a>
                <a href="/">Terms</a>
                <a href="/">Advance</a>
                <a href="/">More</a> 
            </div> */}
        </div></div>
  );
  }
  export default rightPannel;