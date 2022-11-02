import * as React from 'react';
import PostLoader from './PostLoader';
import Leftpannel from '../../leftpannel';
import '../../App.css';


// material ui 

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { alpha } from '@mui/material/styles';
import { MenuProps } from '@mui/material/Menu';
import { Button, Divider,
   TextareaAutosize, TextField,
    Stack, Paper, styled,
    Dialog,DialogActions,DialogContent
  ,DialogContentText,DialogTitle
  ,ListItemButton, ListItemIcon, Tooltip
  , Typography, IconButton, Box, Avatar
  }
  from '@mui/material';


// useState and useEffect
import { useState, useEffect } from "react";

// moment and axios 
import moment from 'moment';
import axios from 'axios';

// react Icon 
import { AiFillLike } from "react-icons/ai";
import { MdModeEditOutline, MdMoreHoriz,
  MdInsertComment, MdDelete,MdCancel
   } from 'react-icons/md';

import { BsFillPinAngleFill, BsPeopleFill,
   BsFillCalendarDateFill, BsEmojiSmile 
   } from 'react-icons/bs';

import { GiSaveArrow } from 'react-icons/gi';
import { IoMdNotificationsOff } from 'react-icons/io';
import { FaImage , FaUserTag , FaShare } from 'react-icons/fa';
import { HiLocationMarker, HiOutlinePhoneIncoming, HiFlag  } from 'react-icons/hi';
import { FiMoreHorizontal } from 'react-icons/fi';


// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  query, collection,
  addDoc, getDocs, doc, onSnapshot
  , serverTimestamp, orderBy, limit
  , deleteDoc, updateDoc
} from "firebase/firestore";
import { upload } from '@testing-library/user-event/dist/upload';


// firebaseConfig

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

// PostDailohBox Function starting from here
const PostDailogBox = () => {
// for upload post open and close
  const [open, setopen] = useState(false)
  const openHandle = () => {
    setopen(true)
  }
  const closeHandle = () => {
    setopen(false)
    // when upload close function so null the above value
    setImageUrl(null)
    setSelectedImage(null)
  }

// for updated edit post open and close
  const [open2, setopen2] = useState(false)
  const openHandle2 = () => {
    setopen2(true)
  }

  const closeHandle2 = () => {
    setopen2(false)
    // when updated close function so null the above value
    setImageUrl(null)
    setSelectedImage(null)
  }



//  more menu dailog Box on post for open and close
  const [anchorEl, setAnchorEl] = React.useState(null);
  const mopen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


// show the selected image under the textfield 
  const [selectedImage, setSelectedImage] = useState(null);

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);




  // to get updated text, image, id
  const [editing, setEditing] = useState({
    editingId: null,
    editingText: "",
    editingImage: ""
  })



  const [updatedfile, setupdatedFile] = useState(null)
  const [file, setFile] = useState(null)
  const [updatedText, setUpdatedText] = useState('')
  const [onclickPostImage, setOnclickPostImage] = useState("")
  const [onclickPostText, setOnclickPostText] = useState("")
  const [onclickPostid, setonclickPostid] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [postText, setPostText] = useState("")
  const [Posts, setPosts] = useState([])
  
  
  
  
  useEffect(() => {

// non real time function is to set data in the firebase/firestore array

    // const getData = async () => {

    //   const querySnapshot = await getDocs(collection(db, "Posts"));
    //   querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} =>`, doc.data());
    //     setIsLoading(true)
    //     setPosts((prev) => {
    //       let arryPost = [...prev, doc.data()]
    //       return arryPost;
    //     })
    //   });
    // }
    // getData();



// unsubsribe close the data when user leave  the page
    let unsubscribe = null;


// real time function get data from firebse/firestore Post array on page load
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


    // unsubscribe clean up function
    return () => {
      console.log("Clean up funtion ");
      unsubscribe()
    }

  }, [])


  // savePost fucntion set data to firebase firestiore Posts array
  const savePost = async () => {

    console.log("postText", postText);
    closeHandle()


    // set data to cloudnary (storage bucket only for image) 
  

    const cloudinaryData = new FormData();
    cloudinaryData.append("file", file );
    cloudinaryData.append("upload_preset", "profilePicture");
    cloudinaryData.append("cloud_name", "dnjbznntm");
    console.log("cloudinaryData",cloudinaryData);
    axios.post(`https://api.cloudinary.com/v1_1/dnjbznntm/image/upload`,
      cloudinaryData, {
      header: {
        'Content-Type': 'multipart/from-data'
      }
    })
      .then(async res => {
        console.log("from then", res.data);

      
// set text , date to firebase/firestore but set image from cloudnary to firebase/firestore
        try {
          const docRef = await addDoc(collection(db, "Posts"), {
            text: postText,
            createdOn: serverTimestamp(),
            img: res?.data?.url, 
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
          setIsLoading(false)
        }

      })
      .catch(err => {
        console.log("from catch", err);
      })
    console.log('file', file)

    

  }
                // console.log('image', selectedImage)
                // console.log('imageURL', imageUrl) 
                // console.log('imagepost', onclickPostImage) 


  const deletePost = async (postId) => {
    handleClose()
    await deleteDoc(doc(db, "Posts", postId));

                  // console.log('postId', postId)
  }



  const updatedPost = async (e) => {
    closeHandle2()
    e.preventDefault();


    await updateDoc(doc(db, "Posts", editing.editingId), {
      text: editing.editingText,
     img:editing.editingImage

    });

    setEditing({
      editingId: null,
      editingText: "",
      editingImage: ''
    })



  }
  console.log("edit", editing)


             //   console.log('editingId:',postId)
             // // console.log('editingText',text)
                 // console.log('postid',onclickPostid)


  return (
    <div>

     {/* create post component where onclick funtion is implemeted */}
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


{/* dailog Box for upload post, when user click on create post comp. 
so dailog Box Appear
*/}
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
                rows={4}
                onChange={(e) => {
                  setPostText(e.target.value)
                }}
                style={{ width: '100%' }}
              />
              {imageUrl && selectedImage && (
                <Box mt={2}
                  m={3}
                >

                  <img src={imageUrl} alt={selectedImage.name} height="100px" />
                </Box>
              )}

            </DialogContentText>
          </DialogContent>
          <Stack m='10px' borderRadius='5px' border="solid 1px lightGrey" p='15px' paddingLeft='30px'>
            <div style={{ display: 'flex' }}>
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}> Add your Photo </span>

              <span style={{ alignItems: 'baseline', display: 'flex', marginLeft: '50%' }} >

                <div >
                  <input
                    id='select-image'
                    type="file"

                    name='postImage'
                    onChange={(e) => {
                      setFile(e.currentTarget.files[0])
                      setSelectedImage(e.target.files[0])
                    }}

                    style={{ display: 'none' }}


                  />
                  <label htmlFor="select-image">

                    < FaImage style={{ paddingLeft: "5px", fontSize: "25px", color: 'green' }} />

                  </label>

                </div>




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
 
 
 {/* map is implemeted to fetch data from firebase/firestore Posts array */}
      {
        Posts.map((eachPost, i) => (

          <div className="post" key={i}>


{/* ... onclick more menu dailog Box  */}
            <moreiconbox>

              <div style={{ float: 'right', fontSize: '25px' }} id="fade-button"
                // aria-controls={mopen ? 'fade-menu' : undefined}
                // aria-haspopup="true"
                // aria-expanded={mopen ? 'true' : undefined}

                onClick={handleClick}>
                <MdMoreHoriz
                  onClick={() => {
                    setonclickPostid(eachPost?.id)
                    setOnclickPostText(eachPost?.text)
                    setOnclickPostImage(eachPost?.img)

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

                    handleClose()
                    openHandle2()
                    setEditing({
                      editingId: onclickPostid,
                      editingText: onclickPostText,
                      editingImage: onclickPostImage
                    })

                  }}>
                    <div style={{ fontSize: '20px', paddingRight: '10px' }}>
                      < MdModeEditOutline />
                    </div>
                    Edit post
                  </MenuItem>
                  <MenuItem onClick={() => {

                    deletePost(onclickPostid)

                  }}>
                    <div style={{ fontSize: '20px', paddingRight: '10px' }}>
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
            </moreiconbox>


{/* Post upper part include profile,name date */}
            <div className="post-top" >
              <div className="dp">
                <img src='http://res.cloudinary.com/dnjbznntm/image/upload/v1667164749/postsPhotos/nqhclfw6gkjlzzae8okp.png' alt="profile" />
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


{/* when onclick post id === database post id */}
              {(onclickPostid === editing.editingId) ?

      //  so updated post dailog box appear 
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

                          rows={4}
                          style={{ width: '100%' }}

                        />

                        {(
                          <Box mt={2}
                            m={3}
                          >

                            <img src={(imageUrl === null) ? onclickPostImage
                              : imageUrl
                            } alt='o' height="100px" />
                          </Box>
                        )}
                      </DialogContentText>

                    </DialogContent>
                    <Stack m='10px' borderRadius='5px' border="solid 1px lightGrey" p='15px' paddingLeft='30px'>
                      <div style={{ display: 'flex' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '15px' }}> Add your Photo </span>
                        <span style={{ alignItems: 'baseline', display: 'flex', marginLeft: '50%' }} >


                          <div >
                            <input
                              id='select-image'
                              type="file"

                              name='postImage'
                              onChange={(e) => {
                          
                                setupdatedFile(e.currentTarget.files[0])
                      setSelectedImage(e.target.files[0])
                              }}

                              style={{ display: 'none' }}


                            />
                            <label htmlFor="select-image">

                              < FaImage style={{ paddingLeft: "5px", fontSize: "25px", color: 'green' }} />

                            </label>

                          </div>


                          {/* <span>  <FaImage style={{ paddingLeft: "5px", fontSize: "25px", color: 'green' }} />
               <input
                type="file"
              //  value={editing.editingImage}
                name='postImage' 
              onChange={(e)=>{
                
               }}
                />
              </span> */}


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

                  </Dialog>
// else empty
                : ""
              }
 {/* post text  */}
              <p>{eachPost?.text}</p>
             

{/* post image */}
              <img src={eachPost?.img} />
            </div>


{/* post Buttom part  */}
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

export default PostDailogBox;