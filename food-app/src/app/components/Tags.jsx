"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Tags = () => {
const [tags,setTags]=useState([]);
useEffect(()=>{
async function fetchdata() {
const res=await fetch("https://dummyjson.com/recipes/tags")
const data=await res.json();

setTags(data)
}
fetchdata();
},[])

const filteredTags = tags.filter((tag, index) => tags.indexOf(tag) === index);
console.log(filteredTags)
  return (
  <div className='bg-black text-white flex flex-row   justify-center items-center  pb-4'>
  <div className='flex  justify-center items-center  border space-x-6  space-y-2  p-3  lg:w-1/2 w-full flex-wrap  text-black  ' >  
{
  filteredTags?.slice(0,15).map((item,id)=>(
    <Link key={id} href={item} className='bg-white rounded-xl border-2 border-black p-1'>#{item}</Link>

  ))
}


</div>  
    </div>
  )
}

export default Tags
