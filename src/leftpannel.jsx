import './App.css'

function leftpannel(){
return(
<div class="right-panel">
            <div class="pages-section">
                <h4>Your pages</h4>
                <a class='page' href="/">
                    <div class="dp">
                        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t1.6435-9/71116208_2154903351278332_4425042497978236928_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGM8yOnuR1xpHd_XrxjaLUUpSUaBohQIu6lJRoGiFAi7soSRJHftim1OONElKVENk1tsSlKyOQ-_lganeetI9oe&_nc_ohc=zCLuBnZjA3QAX9MOBO3&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT8GzcohtnMAp51Zc0iiq0wS1DNOOkq2jEsu0Rbqv06x9Q&oe=637E3D96" alt=""/>
                    </div>
                    <p class="name">SMIT</p>
                </a>

                <a class='page' href="/">
                    <div class="dp">
                        <img src="data:image/png;base64,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" alt="Pakistan Cricket Team"/>
                    </div>
                    <p class="name">Pakistan Cricket Team</p>
                </a>
            </div>

            <div class="friends-section">
                <h4>Friends</h4>
                <a class='friend' href="/">
                    <div class="dp">
                        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/290841564_768091104225777_1144402134500468254_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGCgDpuwfXO19PWzB1cHtg3kLttlvX8I6eQu22W9fwjpxQ4r76ykNwQM8s62M5MKHtyy3Hj_M0_DEV2emxduPYB&_nc_ohc=auMFQFXIXMoAX_EWEWf&tn=BHmxVHX9AWcvsfiO&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT9Wh8ELt8Boq3U9VSWVhYNyEGU6D2SZwuuX_KVBuC_Ezg&oe=635E59B2" alt=""/>
                    </div>
                    <p class="name">Yahya Arshad</p>
                </a>

                <a class='friend' href="/">
                    <div class="dp">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGXSiZ03N3kiQ/profile-displayphoto-shrink_800_800/0/1606212181669?e=2147483647&v=beta&t=Npw4xjw1fcuvlqajhHz7uIaZB4ZjYZOHXZpteQoqd0w" alt=""/>
                    </div>
                    <p class="name">Arif</p>
                </a>

                <a class="friend" href="/">
                    <div class="dp">
                        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/309064501_424788813098604_7297393818782173365_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFvcwYvyfAd8E1vFuwbmO2KCGQYLh7LdpMIZBguHst2kyqiXgQqfDAtDueZzhBZ3dtTmWTxCOFk2jrHleXPgEyj&_nc_ohc=9R_pF3Om94sAX9MnnoF&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT9ZOFkyEbED9_245SpOZGhMcLR2Upm-anPQ7s0P8-Ai0g&oe=635E8394" alt=""/>
                    </div>
                    <p class="name">Maira</p>
                </a>

                <a class="friend" href="/">
                    <div class="dp">
                        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/265736108_1330018580752480_5049011977293063528_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH9CC6066Onts7bDZ_N-ltgCMwPozXsZoIIzA-jNexmggTPzRbrcHxLV1U8Y7scD9-v2fB3K7zlWKbr4lwcxxD2&_nc_ohc=cnfY_iHK8KoAX8oHbrg&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT-Wjjpzh7-bpBQBKRpNbRzaCu5ooPHNxWOrmpN7S8OoFg&oe=635E0AC4" alt=""/>
                    </div>
                    <p class="name">Faizan Khan</p>
                </a>

                <a class="friend" href="/">
                    <div class="dp">
                        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/299334580_142571231797322_3211495973660026488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeECFSnofCcM6PKaH4JMaD7NpK1qGO3bHROkrWoY7dsdE5vJbmon5-V83Sg0gDSYPlGM2JY41L9Si60w5ja7_V9R&_nc_ohc=9_S0naVFZLcAX8PQGxp&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT9nPWg0_CyViFmpwuY5PDkN-P-MR27DUMARB_aR22dAlw&oe=635E6418" alt="fried"/>
                    </div>
                    <p class="name">Syeda Hoor</p>
                </a>

               

                <a class="friend" href="/">
                    <div class="dp">
                        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/310261937_1324644578292998_7153922244290144325_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNq3FBPIX83vv9UIN0Y_p9RVX9DpdJKtRFVf0Ol0kq1CSuvOwGfgaxl9JZ-Intd5eCEFT_utr6hcLphURc7fas&_nc_ohc=T1AlcG8folwAX_CO5wE&_nc_oc=AQmEhGEh87FlsNF8TH8R2xMfNPlUWVUpe8hPsCidNfh24UvDpvW6g3WET12vyOBwrSE&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT-12oCex--cu3mJQcIij-9TBsHQZee9g6U72_AHAstcRA&oe=635DB846" alt="Fried"/>
                    </div>
                    <p class="name">Humayun</p>
                </a>
                
            </div>
        </div>
    

)

}
export default leftpannel;