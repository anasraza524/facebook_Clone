import './index.css'
import PostDailogBox from './PostDailogBox';
import {BiImageAdd } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from 'axios';
import { margin } from '@mui/system';
// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  query, collection,
  addDoc, getDocs, doc, onSnapshot
  , serverTimestamp, orderBy, limit
  , deleteDoc, updateDoc
} from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyCHJPHtL28wBhCbQ-OMfBvAYjWvCehzD_U",
//     authDomain: "faceebooks-c47ae.firebaseapp.com",
//     projectId: "faceebooks-c47ae",
//     storageBucket: "faceebooks-c47ae.appspot.com",
//     messagingSenderId: "468843951003",
//     appId: "1:468843951003:web:08a3b19c226d194fbd273e",
//     measurementId: "G-ZS1WJYNCW8"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
  
  
//   // Initialize Cloud Firestore and get a reference to the service
//   const db = getFirestore(app);



function profile() {
    // const [profile, setProfile] = useState([])
    //  const [profileFile, setProfileFile] = useState([])
    // useEffect(() => {

    //     // const getData = async () => {
    
    //     //   const querySnapshot = await getDocs(collection(db, "profile"));
    //     //   querySnapshot.forEach((doc) => {
    //     //     console.log(`${doc.id} =>`, doc.data());
    //     //     setIsLoading(true)
    //     //     setprofile((prev) => {
    //     //       let arryPost = [...prev, doc.data()]
    //     //       return arryPost;
    //     //     })
    //     //   });
    //     // }
    //     // getData();
    
    
    
    
    
    
    
    
    
    //         let unsubscribe = null;
    //         const getRealTimeData = async () => {
        
        
    //           const q = query(collection(db, "profile"),
                
    //           unsubscribe = onSnapshot(q, (querySnapshot) => {
    //             const profile = [];
    //             querySnapshot.forEach((doc) => {
    //               let data = doc.data()
    //               data.id = doc.id
    //               profile.push(data)
    //               // profile.push({...doc.data(),id: doc.id });
    //               // profile.push(doc.data());
    //             });
    //             console.log("profile: ", profile);
    //             setProfile(profile)
    //           })
        
    //           )
    //         }
    //         getRealTimeData();
        
    //         // return () => {
    //         //   console.log("Clean up funtion ");
    //         //   unsubscribe()
    //         // }
        
    //       }, [])

    //   const saveprofile = async () => {

    
  
    
    //     const cloudinaryData = new FormData();
    //     cloudinaryData.append("profileFile", 
    
    //     profileFile
    
        
    //     );
    //     cloudinaryData.append("upload_preset", "profilePicture");
    //     cloudinaryData.append("cloud_name", "dnjbznntm");
    //     console.log("cloudinaryData",cloudinaryData);
    //     axios.post(`https://api.cloudinary.com/v1_1/dnjbznntm/image/upload`,
    //       cloudinaryData, {
    //       header: {
    //         'Content-Type': 'multipart/from-data'
    //       }
    //     })
    //       .then(async res => {
    //         console.log("from then", res.data);
    
          
    //         try {
    //           const docRef = await addDoc(collection(db, "profile"), {
    //             profile:res.data.url,
                
    
                
    //           });
    //           console.log("Document written with ID: ", docRef.id);
    //         } catch (e) {
    //           console.error("Error adding document: ", e);
             
    //         }
    
    //       })
    //       .catch(err => {
    //         console.log("from catch", err);
    //       })
    
    
    //     }
    
    
      
    
    //     // 
    
      

    return (
     
        <div>
   

            <div className="profileBody">
                <div className="cover">
                    <img src="https://images.unsplash.com/photo-1549813069-f95e44d7f498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80"
                        className="coverPhoto" alt="" />

                        <input
                         type="file"
                          accept='image/png
                          , image/jpeg'
                           name=""
                            id="profileButton"
                             hidden 
                             onChange={(e) => {
                                // setProfileFile(e.currentTarget.files[0])
                               
                              }}
                             />
                        <label htmlFor="profileButton">
                        <BiImageAdd 
                        style={{ fontSize: "35px",
                        position:'absolute',top:'35%',right:'310px' }}/>
                        </label>
               
               </div>
                <div className="prfileBox">
                    <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/306786755_1202817790289152_518738169980312581_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGhdixRYXqpwfInQPFISuX6JYrz7428nSUlivPvjbydJTr03znpDJNKZOwteDQCzVK6M4gJhb1I13sdmEIXD2eo&_nc_ohc=Y3AQ1RETYSIAX9GOqp6&_nc_ht=scontent.fkhi20-1.fna&oh=00_AfC7NCY4TWlC1v882OeBjC0SfO8kifKYyXGprr6STtuuiw&oe=6365C500"

                     alt='profile' className="profilephoto" />
                   
                   <div>
                        <input
                         type="file"
                          accept='image/png
                          , image/jpeg'
                           name=""
                            id="profileButton"
                             hidden 
                             onChange={(e) => {
                                // setProfileFile(e.currentTarget.files[0])
                               
                              }}
                             />
                        <label htmlFor="profileButton">
                        <BiImageAdd style={{ fontSize: "35px", position:'relative',top:'60px',right:'40px' }}/>
                        </label></div>
                   
                    <span className="prifileName">
                        Muhammad Anas Raza <br />(Ar) <br />
                        <p className='font' >725 friends</p>
                    </span>
                </div>
<div className='ProfileBody'>
                <div className="profileRightPannel">
                    <div className="unlockProfile">
                        <span>

                        </span>
                    </div>
                    <div className="introBody">
                        <span className="prifileName">Intro</span>
                        <p>Worked as an active young Researcher <br /> dealing with  Environmental Issues and <br /> Regular Chemical Analysis</p>
                        <span className="prifileName">About</span> <br />
                        Work
                        <span className='font2'> <br /><strong> <br /> Radio Chemist at Sindh Institute of Urology and Transplantation
                            6 January 2019 - Present<br /></strong>
                            ·
                            Karachi, Pakistan<br />
                            Routine QC/ Analysis of Cyclotron generated F-18<br /> labelled FDG Radio Pharmaceutical for PET-CT
                            <br />Scan.
                        </span>
                    </div>
                    <div className="introfrined">
                        <span className="prifileName">Frineds</span>
                        <div className="gellery">
                            <table>
                                <tr>
                                    <td>        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/288523632_1399397310538389_5358344972407140635_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHsw1d03UxHUMZ7Ffh7g4oKn9P2GtyeSgef0_Ya3J5KB8KQlHBYnWfnEq8_LoQQxOIZpg37y5T_2Vc3bgTRMW3A&_nc_ohc=zMwDZIoHen4AX94EsjD&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT_F1PpojQDWBFfsJqtSCBpCm3hLj5QzajUet7o1UvAl3A&oe=635E2E2F"
                                    /></td>
                                    <td>        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/290841564_768091104225777_1144402134500468254_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGCgDpuwfXO19PWzB1cHtg3kLttlvX8I6eQu22W9fwjpxQ4r76ykNwQM8s62M5MKHtyy3Hj_M0_DEV2emxduPYB&_nc_ohc=auMFQFXIXMoAX_EWEWf&tn=BHmxVHX9AWcvsfiO&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT9Wh8ELt8Boq3U9VSWVhYNyEGU6D2SZwuuX_KVBuC_Ezg&oe=635E59B2"
                                    /></td>
                                </tr>
                                <tr>
                                    <td>        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/299334580_142571231797322_3211495973660026488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeECFSnofCcM6PKaH4JMaD7NpK1qGO3bHROkrWoY7dsdE5vJbmon5-V83Sg0gDSYPlGM2JY41L9Si60w5ja7_V9R&_nc_ohc=9_S0naVFZLcAX8PQGxp&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT9nPWg0_CyViFmpwuY5PDkN-P-MR27DUMARB_aR22dAlw&oe=635E6418"
                                    /></td>
                                    <td>        <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/310261937_1324644578292998_7153922244290144325_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNq3FBPIX83vv9UIN0Y_p9RVX9DpdJKtRFVf0Ol0kq1CSuvOwGfgaxl9JZ-Intd5eCEFT_utr6hcLphURc7fas&_nc_ohc=T1AlcG8folwAX_CO5wE&_nc_oc=AQmEhGEh87FlsNF8TH8R2xMfNPlUWVUpe8hPsCidNfh24UvDpvW6g3WET12vyOBwrSE&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT-12oCex--cu3mJQcIij-9TBsHQZee9g6U72_AHAstcRA&oe=635DB846"
                                    /></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="profileLeftPannel">

<PostDailogBox/>
                    

                </div>
                </div>
            </div>
    
        </div>
    );

}
export default profile;