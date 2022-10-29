import RightPannel from '../../rightpannel';
import '../../App.css';
import MiddlePannel from '../../middlepannel';
 import Leftpannel from '../../leftpannel';
function home() {
    return (
        <div className='container'>
            <div><RightPannel/></div>
            <MiddlePannel/>
           {/* <div ><Leftpannel/></div>   */}
        </div>
    );
}

export default home;