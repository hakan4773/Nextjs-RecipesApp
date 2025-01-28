"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, MenuItem } from '@mui/material'
import { useRouter } from 'next/navigation'



const Header = () => {

  const router=useRouter();
const [anchorEl, setAnchorEl] = useState(null);
const open=Boolean(anchorEl)
const handleClick=(e)=>{
setAnchorEl(e.currentTarget)
}
const handleClose = () => {
  setAnchorEl(null);
};
  const meals=[
    {
      name:"Breakfast",
      url:"/breakfast"
    },
    {
      name:"Lunch",
      url:"/lunch"
    },
    {
      name:"Dinner",
      url:"/dinner"
    },
    {
      name:"Snack",
      url:"/snack"
    },
    {
      name:"Appetizer",
      url:"/appetizer"
    }
  ]


  return (
    <div className='flex flex-col  lg:h-20 h-32 p-2 bg-black w-full'>
        

<ul className='text-white flex justify-center items-center text-xl text-center gap-6 w-full border-b'>
<Link href={"/"}  >Home</Link>
<Link href={"/About"} >About</Link>
<Link href={"/foods"} >Foods</Link>
<Link href={"/Contact"} >Contact</Link>
</ul>


<div  className='h-12 text-lg  p-2 flex flex-row lg:space-x-8 space-x-2 text-white justify-center items-center '>

<button   onMouseMove={handleClick} className='cursor-pointer'>Meals</button>
<Menu open={open}  anchorEl={anchorEl} className='flex justify-center items-center' onClose={handleClose}>
  {meals.map((meal,index) => (
            <MenuItem key={index} value={meal.name} onClick={()=>router.push(`/foods/meal-type/${meal.name.toLocaleLowerCase()}`)}>
              {meal.name}
            </MenuItem>
          ))}
</Menu>
<Link href={"/foods"}>World Recipes</Link>
<Link href={"seasonal"}>Seasonal</Link>
<Link href={"/diet"}>Diet</Link>
<Link href={"for-kids"}>For Kids </Link>
<Link href={"/foods/meal-type/beverage"}>Drinks </Link>




</div>


    </div>
  )
}

export default Header
