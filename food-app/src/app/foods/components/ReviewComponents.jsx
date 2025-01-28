"use client"
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Button, Stack } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const ReviewComponents = () => {
const [open,setOpen]=useState(false)
const [text,setText]=useState({username:"",review:""})
const [reviews,setReviews]=useState([])

const AddReviews=(e)=>{
        if (text.username.trim() && text.review.trim()) {
      setReviews([...reviews,text]); 
      setText({ username: "", review: "" }); 
    }
}

const handleChange=(e)=>{
const {name,value}=e.target;
setText({...text,[name]:value})
}

console.log(reviews)
const HandleOpen=()=>{
    setOpen(true)
}
const HandleClose=()=>{
    setOpen(false)
}
  return (
    <div >
      <Button variant="outlined" sx={{width:{xs:500,md:350},marginBottom:{xs:2}}}  onClick={HandleOpen}>
   Read a comments

      </Button>
      <Dialog 
        open={open}
        onClose={HandleClose}
      >
        <DialogTitle>Comments</DialogTitle>
        <DialogContent sx={{width:500}}>
       
          <TextField
            autoFocus
            required
            margin="dense"
            id="username"
            name="username"
            label="username"
            type="text"
            fullWidth
            variant="standard"
            value={text.username}
            onChange={handleChange}
          />
             <TextField
            autoFocus
            required
            margin="dense"
            id="review"
            name="review"
            label="review"
            type="text"
            fullWidth
            variant="standard"
            value={text.review}
            onChange={handleChange}
          />


        </DialogContent>

        {reviews?.slice(0,3).map((review,index)=>(

<Stack key={index} direction="column" sx={{fontFamily:"serif",padding:2 }}>
   <Stack direction="row" spacing={1}><AccountCircle /><p className='flex'>{review.username}</p></Stack> 


<TextField disabled sx={{width:450,color:"black"}}  variant='outlined'  value={review.review.substring(0,30)+"..."} >
</TextField>
        </Stack>    

        ))}

      

        <Button variant='text' sx={{width:200,marginLeft:18}}>More Reviews</Button>
        <DialogActions >
          <Button onClick={HandleClose}>Cancel</Button>
          <Button type="submit" onClick={AddReviews}>ADD</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ReviewComponents
