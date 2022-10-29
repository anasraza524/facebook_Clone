import * as React from 'react';
import PostLoader from './PostLoader';
import Leftpannel from '../../leftpannel';
import '../../App.css';
import { Button, Divider, TextareaAutosize, TextField, Stack, Paper, styled }
 from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from "react";
import { MdCancel } from 'react-icons/md';
import { FaImage } from 'react-icons/fa';
import { FaUserTag } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs';
import { HiLocationMarker, HiOutlinePhoneIncoming } from 'react-icons/hi';
import { HiFlag } from 'react-icons/hi';
import { FiMoreHorizontal } from 'react-icons/fi';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { MdModeEditOutline, MdMoreHoriz } from 'react-icons/md';
import { BsFillPinAngleFill, BsPeopleFill, BsFillCalendarDateFill } from 'react-icons/bs';
import { GiSaveArrow } from 'react-icons/gi';
import { IoMdNotificationsOff } from 'react-icons/io';
import { ListItemButton, ListItemIcon,Tooltip
 , Typography,IconButton,Box,Avatar
} from '@mui/material';

import moment from 'moment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


import {  alpha } from '@mui/material/styles';

import  { MenuProps } from '@mui/material/Menu';














import { AiFillLike } from "react-icons/ai";
import { MdInsertComment, MdDelete } from "react-icons/md";
import { FaShare } from "react-icons/fa";

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  query, collection,
  addDoc, getDocs, doc, onSnapshot
  , serverTimestamp, orderBy, limit
  , deleteDoc,updateDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHJPHtL28wBhCbQ-OMfBvAYjWvCehzD_U",
  authDomain: "faceebooks-c47ae.firebaseapp.com",
  projectId: "faceebooks-c47ae",
  storageBucket: "faceebooks-c47ae.appspot.com",
  messagingSenderId: "468843951003",
  appId: "1:468843951003:web:08a3b19c226d194fbd273e",
  measurementId: "G-ZS1WJYNCW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const PostDailogBox = () => {
  const [open, setopen] = useState(false)
  const [open2, setopen2] = useState(false)





  const [anchorEl, setAnchorEl] = React.useState(null);
  const mopen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };








  const openHandle = () => {
    setopen(true)
  }
  const openHandle2 = () => {
    setopen2(true)
  }
  const closeHandle = () => {
    setopen(false)
  }
  const closeHandle2 = () => {
    setopen2(false)
  }















  const [editing, setEditing] = useState({
    editingId: null,
    editingText: ""
  })
  const [onclickPostText, setOnclickPostText] = useState("")
  const [onclickPostid, setonclickPostid] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [postText, setPostText] = useState("")
  const [Posts, setPosts] = useState([])
  useEffect(() => {

    const getData = async () => {

      const querySnapshot = await getDocs(collection(db, "Posts"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
        setIsLoading(true)
        setPosts((prev) => {
          let arryPost = [...prev, doc.data()]
          return arryPost;
        })
      });
    }
    // getData();





    




    let unsubscribe = null;
    const getRealTimeData = async () => {


      const q = query(collection(db, "Posts"),
        orderBy('createdOn', 'desc'));
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        const Posts = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data()
          data.id = doc.id
          Posts.push(data)
          // Posts.push({...doc.data(),id: doc.id });
          // Posts.push(doc.data());
        });
        console.log("Posts: ", Posts);
        setPosts(Posts)
      });


    }
    getRealTimeData()

    return () => {
      console.log("Clean up funtion ");
      unsubscribe()
    }

  }, [])

  const savePost = async () => {



    console.log("postText", postText);
    closeHandle()
    // 
    try {
      const docRef = await addDoc(collection(db, "Posts"), {
        text: postText,
        createdOn: serverTimestamp(),

      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      setIsLoading(false)
    }
  }




  const deletePost = async (postId) => {
    handleClose()
     await deleteDoc(doc(db, "Posts", postId));

    console.log('postId', postId)
  }



  const updatedPost = async (postId,updatedText) => {
    handleClose()
    
await updateDoc(doc(db, "Posts", postId), {
  text: updatedText
});


    // console.log('postId', postId)
  }

const edit = (postId,text) => { 
  setEditing({
    editingId:postId,
    editingText:text
    
  })
  console.log('editingId:',postId)
console.log('editingText',text)
console.log('postid',onclickPostid)
 }

  return (
    <div>
      <div onClick={openHandle} className="post create">
        <div className="post-top">
          <div className="dp">
            <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/306786755_1202817790289152_518738169980312581_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6rHQjW2YWHIAX9hBIOc&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT_-8nTwGF8_aRY5SbE7OcgrDafHoNkzEiysNb5PTCBvlg&oe=63325A80" alt="" />
          </div>
          <input type="text" placeholder="What's on your mind, Anas Raza ?" />
        </div>

        <div className="post-bottom">
          <div className="action">
            <i >
            </i>
            <span>Live video</span>
          </div>
          <div className="action">
            <i></i>
            <span>Photo/Video</span>
          </div>
          <div className="action">
            <i ></i>
            <span>Feeling/Activity</span>
          </div>
        </div>
      </div>

      <div className="dialogBox">
        <Dialog
          open={open}
          onClose={closeHandle}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"

        >

          <DialogTitle id="alert-dialog-title">
            <span style={{ fontWeight: 'bold', fontSize: '22px', alignItems: 'center' }}>  Create Post.. </span>

            <Button style={{ float: 'right', fontSize: '22px', color: 'Black' }} onClick={closeHandle}><MdCancel /></Button>
          </DialogTitle>
          <Divider />

          <DialogContent style={{ height: '260px', width: '600px' }}>
            <DialogContentText id="alert-dialog-description">
              <TextField
                id="outlined-multiline-static"
                placeholder='What`s in your mind, Muhamamd Anas?'
                multiline
                rows={8}
                onChange={(e) => {
                  setPostText(e.target.value)
                }}
                style={{ width: '100%' }}
              />
            </DialogContentText>

          </DialogContent>
          <Stack m='10px' borderRadius='5px' border="solid 1px lightGrey" p='15px' paddingLeft='30px'>
            <div style={{ display: 'flex' }}>
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}> Add your Photo </span>

              <span style={{ alignItems: 'baseline', marginLeft: '50%' }} >
                <FaImage style={{ paddingLeft: "5px", fontSize: "25px", color: 'green' }} />


                <FaUserTag style={{ paddingLeft: "5px", fontSize: "25px", color: 'blue' }} />

                <BsEmojiSmile style={{ paddingLeft: "5px", fontSize: "25px", color: 'yellow' }} />
                <HiLocationMarker style={{ paddingLeft: "5px", fontSize: "25px", color: 'red' }} />
                <HiFlag style={{ paddingLeft: "5px", fontSize: "25px", color: 'skyblue' }} />

                <FiMoreHorizontal style={{ paddingLeft: "5px", fontSize: "25px", color: 'grey' }} />


              </span>
            </div>
          </Stack>
          <DialogActions>

            <Button style={{ width: '100%' }} type='submit' onClick={savePost} variant="contained" disableElevation >
              Share
            </Button>

          </DialogActions>

        </Dialog>
      </div>



      {/* Post is Starig */}
      {/* {(isLoading) ? <PostLoader/> : ""} */}
      {
        Posts.map((eachPost, i) => (

          <div className="post" key={i}>

            <morebox>

              <div style={{ float: 'right', fontSize: '25px' }} id="fade-button"
        // aria-controls={mopen ? 'fade-menu' : undefined}
        // aria-haspopup="true"
        // aria-expanded={mopen ? 'true' : undefined}
       
        onClick={handleClick}>
                <MdMoreHoriz
                  onClick={() => {
 setonclickPostid(eachPost?.id)
 setOnclickPostText(eachPost?.text)

 }}
/>
              </div>




              <div>
     
      <Menu
      sx={{ width: 340, fontWeight: "bold" }}
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
    
        anchorEl={anchorEl}
        open={mopen}
        onClose={handleClose}
        TransitionComponent={Fade}
      

          
          
        
      >
        <MenuItem onClick={handleClose}>
        <div style={{ fontSize: '20px', paddingRight: '10px' }}>
                          <BsFillPinAngleFill />
                        </div>

                        Pin post
          </MenuItem>

        <MenuItem onClick={handleClose}>
        <div style={{ fontSize: '20px', paddingRight: '10px' }}>
                          <GiSaveArrow />
                        </div>
                        Save vidoe
          </MenuItem>
          <Divider />
        <MenuItem onClick={() => {
          

openHandle2()
edit(
onclickPostid , onclickPostText
)

}}>
        <div style={{ fontSize: '20px', paddingRight: '10px' }}>
                          < MdModeEditOutline />
                        </div>
                        Edit post
          </MenuItem>
          <MenuItem onClick={() => {

deletePost(onclickPostid)

}}>
          <div  style={{ fontSize: '20px', paddingRight: '10px' }}>
                          <MdDelete />
                          </div>
                        Delete
                        
          </MenuItem>

          <MenuItem onClick={handleClose}>
          <div style={{ fontSize: '20px', paddingRight: '10px' }}>
                          <IoMdNotificationsOff />
                        </div>
                        Turn of notification for this post
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                        <div style={{ fontSize: '20px', paddingRight: '10px' }}>
                          <BsFillCalendarDateFill />
                        </div>
                        Edit date
                        </MenuItem>  
                            
      </Menu>
    </div>

{/*  */}










      


            </morebox>


            <div className="post-top" >
              <div className="dp">
                <img src='https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/306786755_1202817790289152_518738169980312581_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGhdixRYXqpwfInQPFISuX6JYrz7428nSUlivPvjbydJTr03znpDJNKZOwteDQCzVK6M4gJhb1I13sdmEIXD2eo&_nc_ohc=a5kNmKwtOLcAX9lScUx&_nc_ht=scontent.fkhi20-1.fna&oh=00_AT_ZeQ8bzY0KdlTSECR1njcTYeGcOne02ROIT76Felto3w&oe=635DDC00' alt="profile" />
              </div>
              <div className="post-info">
                <p className="name">Muhammad Anas Raza <br />
                </p>
                <span className="time">{moment(
                  // if this happen
                  (eachPost?.createdOn?.seconds) ?
                    // do this
                    eachPost?.createdOn?.seconds * 1000
                    :
                    undefined
                ).fromNow()}</span>



              </div>

            </div>
            <div className="post-content">
            {(onclickPostid === editing.editingId) ?
            <Dialog
          open={open2}
          onClose={closeHandle2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"

        >

          <DialogTitle id="alert-dialog-title">
            <span style={{ fontWeight: 'bold', fontSize: '22px', alignItems: 'center' }}>  Updated Post.. </span>

            <Button style={{ float: 'right', fontSize: '22px', color: 'Black' }}
             onClick={closeHandle2}
             ><MdCancel /></Button>
          </DialogTitle>
          <Divider />

          <DialogContent style={{ height: '260px', width: '600px' }}>
            <DialogContentText id="alert-dialog-description">
              <TextField
                id="outlined-multiline-static"
                type="text"
              
                value={editing.editingText}
                onChange={(e) => {
                  setEditing({
                    ...editing,
                    editingText: e.target.value
                  })
                }}

                placeholder="please enter updated text"
                
               
                style={{ width: '100%' }}
                rows={8}
              />
            </DialogContentText>

          </DialogContent>
          <Stack m='10px' borderRadius='5px' border="solid 1px lightGrey" p='15px' paddingLeft='30px'>
            <div style={{ display: 'flex' }}>
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}> Add your Photo </span>

              <span style={{ alignItems: 'baseline', marginLeft: '50%' }} >
                <FaImage style={{ paddingLeft: "5px", fontSize: "25px", color: 'green' }} />


                <FaUserTag style={{ paddingLeft: "5px", fontSize: "25px", color: 'blue' }} />

                <BsEmojiSmile style={{ paddingLeft: "5px", fontSize: "25px", color: 'yellow' }} />
                <HiLocationMarker style={{ paddingLeft: "5px", fontSize: "25px", color: 'red' }} />
                <HiFlag style={{ paddingLeft: "5px", fontSize: "25px", color: 'skyblue' }} />

                <FiMoreHorizontal style={{ paddingLeft: "5px", fontSize: "25px", color: 'grey' }} />


              </span>
            </div>
          </Stack>
          <DialogActions>

            <Button style={{ width: '100%' }}
             type='submit'
             onClick={updatedPost}
             variant="contained" disableElevation >
              update
            </Button>

          </DialogActions>

        </Dialog> : eachPost?.text}

            </div>



            <hr className="dvider" />
            <div className="post-bottom">
              <div className="action">
                <i><AiFillLike /></i>
                <span>Like</span>
              </div>
              <div className="action">
                <i ><MdInsertComment /></i>
                <span>Comment</span>
              </div>
              <div className="action">
                <i ><FaShare /></i>
                <span>Share</span>
              </div>
            </div>
          </div>
        ))}


    </div>

  )
}

export default PostDailogBox