import './App'
import Fbpost from './fbpost';
import { AiOutlinePlus } from "react-icons/ai";
function middlePannel(){
return(

<div class="middle-panel">

<div class="story-section">

    <div class="story create">
        <div class="dp-image">
            <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/306786755_1202817790289152_518738169980312581_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6rHQjW2YWHIAX9hBIOc&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT_-8nTwGF8_aRY5SbE7OcgrDafHoNkzEiysNb5PTCBvlg&oe=63325A80" alt="Profile pic"/>
        </div>
        <span class="dp-container">
            <AiOutlinePlus/>
        </span>
        <span class="name">Create Story</span>
    </div>


    <div class="story">
    <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/299660162_799167337784820_1984554633765222568_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=Rwm_7db3VsEAX8CdlTs&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT_2z4Wk6b5ABk9fbrhL1nLdVpfMXGOsS4HAbEkzVMn8MA&oe=63319060" alt="Story image"/>
        <div class="dp-container">
            <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/290841564_768091104225777_1144402134500468254_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L3tM1BVl5G4AX8e0J4k&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT-KZISsJHo9lQ5js8FW3RzLJ19osni05izOuDauXNOT6Q&oe=6330DDF2" alt=""/>
        </div>
        <p class="name">Yahya Arshad</p>
    </div>

    <div class="story">
        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/308526960_8243427569063836_1606047948524152085_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=LGss422GCloAX-aH_8J&tn=WFHeEdop_vZQdHW1&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT9yZfIm5jw8LTGfXHCmNvBbfo0rWWfjkd_PtCjms2iixA&oe=63325776" alt="Story image"/>
        <span class="dp-container">
            <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/306949937_1359037581292637_3715893918810310650_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8B_niiyphVQAX-bDGU9&tn=WFHeEdop_vZQdHW1&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT_f9Zl0tRQXAuYsH5iTILAz1H9weTC82rfzMFPWShNgpg&oe=63329D78" alt="Profile pic"/>
        </span>
        <span class="name">Haris</span>
    </div>

    <div class="story">
        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/306856502_5029691153799523_3695609696872407750_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=6SUcSP683MUAX8u6eCa&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT-3SlJ0Pds8B8HSPynL8tjbxazpL6Dc_ySE_eVpr8ujyg&oe=63310CF0" alt="Story image"/>
        <span class="dp-container">
            <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t1.6435-9/71116208_2154903351278332_4425042497978236928_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WRLW80AD7GEAX8I4QhB&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT_WYH0Gm7f6X2hvqabMwJ0NSXK73YZRPkU-xLQiv6k2iw&oe=6352BC16" alt="Profile pic"/>
        </span>
        <span class="name">SMIT</span>
    </div>

    <div class="story">
        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/265736108_1330018580752480_5049011977293063528_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OcXdReH9r9gAX_PE1Tv&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT_jmY3rwaZNhJFan1hIXY_7BaBf3DoVKCHmz7g8wCdoXQ&oe=63328944" alt="Story image"/>
        <span class="dp-container">
            <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/265736108_1330018580752480_5049011977293063528_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OcXdReH9r9gAX_PE1Tv&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT_jmY3rwaZNhJFan1hIXY_7BaBf3DoVKCHmz7g8wCdoXQ&oe=63328944" alt="Profile pic"/>
        </span>
        <span class="name">Faizan</span>
    </div>
</div>

<div class="post create">
    <div class="post-top">
        <div class="dp">
            <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/306786755_1202817790289152_518738169980312581_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6rHQjW2YWHIAX9hBIOc&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT_-8nTwGF8_aRY5SbE7OcgrDafHoNkzEiysNb5PTCBvlg&oe=63325A80" alt=""/>
        </div>
        <input type="text" placeholder="What's on your mind, Anas Raza ?" />
    </div>
    
    <div class="post-bottom">
        <div class="action">
        <i >
            </i>
            <span>Live video</span>
        </div>
        <div class="action">
            <i></i>
            <span>Photo/Video</span>
        </div>
        <div class="action">
            <i ></i>
            <span>Feeling/Activity</span>
        </div>
    </div>
</div>

<Fbpost/>







</div>

)

}
export default middlePannel;