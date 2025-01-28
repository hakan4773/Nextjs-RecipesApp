import Link from "next/link";
import React from "react";
import food from "../../../public/food.jpg"
import Image from "next/image";
const Footer = () => {
  return (
    <>
    <div className="flex lg:flex-row flex-wrap bg-black text-white border-t p-4 gap-10 font-serif   " >
      <div className="flex flex-col p-2 mx-6">
        <h1 className="flex  text-xl underline font-bold">Links</h1>
        <ul className="text-gray-400 flex flex-col text-lg ">
          <Link href={"/"}>Home</Link>
          <Link href={"/About"}>About</Link>
          <Link href={"/foods"}>Foods</Link>
          <Link href={"/Contact"}>Contact</Link>
        </ul>
      </div>

      <div className="flex flex-col p-2 mx-6">
        <h1 className="flex text-xl underline font-bold">Cuisine</h1>
        <ul className="text-gray-400 flex flex-col text-lg">
          <Link href={"/"}>İtalian</Link>
          <Link href={"/About"}>American</Link>
          <Link href={"/foods"}>Turkish</Link>
          <Link href={"/Contact"}>Thai</Link>
          <Link href={"/Contact"}>Meksican</Link>
          <Link href={"/Contact"}>Greek</Link>

        </ul>
      </div>
      <div className="flex flex-col p-2 mx-6">
        <h1 className="flex text-xl underline font-bold">Meal</h1>
        <ul className="text-gray-400 flex flex-col text-lg">
          <Link href={"/"}>Breakfast</Link>
          <Link href={"/About"}>Lunch</Link>
          <Link href={"/foods"}>Dinner</Link>
          <Link href={"/Contact"}>Snack</Link>
          <Link href={"/Contact"}>Drinks</Link>
          <Link href={"/Contact"}>Appetizer</Link>

        </ul>
      </div>

      <div className="lg:w-1/2 w-full  flex lg:flex-row flex-col mx-auto ">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
      </p> <Image src={food} width={300}  height={50} className="lg:w-[300px] w-full h-full" alt="food"></Image>


    
     </div>


     

    </div>
    <div className=" flex justify-center text-white bg-gray-800 ">
        Copyright © 2025 Recipesfree.net. All Rights Reserved
      </div>
      </>
  );
};

export default Footer;
