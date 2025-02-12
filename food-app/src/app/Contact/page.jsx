import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
const page = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
<h1 className='text-3xl p-2'>Contact Form</h1>


    <form className='p-2'>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
        <TextField
        label="Message"
        variant="outlined"
        fullWidth
        type=''
        multiline
        rows={4}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        
      >
        Send Message
      </Button>

      <div className='pt-6  w-full flex space-x-10'>
<p className='font-bold'>Ya da bizimle İletişime geçin</p>

        <div className='flex justify-center items-center space-x-5'> 
<FacebookIcon className='size-10'/>
<InstagramIcon className='size-10'/>
<XIcon className='size-10'/>
<TelegramIcon className='size-10' />
</div>
      </div>
    </form>

    </div>
  )
}

export default page
