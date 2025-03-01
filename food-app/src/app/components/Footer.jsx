import Link from "next/link";
import React from "react";

const Footer = () => {



  return (
    
    <div className="flex lg:flex-row flex-wrap min-w-[410px] bg-black text-white border-t p-4 gap-10   " >
    <div className="flex">
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
          <Link href={"/foods/Italian"}>İtalian</Link>
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
          <Link href={"/foods/meal-type/breakfast"}>Breakfast</Link>
          <Link href={"/foods/meal-type/lunch"}>Lunch</Link>
          <Link href={"/foods/meal-type/dinner"}>Dinner</Link>
          <Link href={"/foods/meal-type/snack"}>Snack</Link>
          <Link href={"/foods/meal-type/beverage"}>Drinks</Link>
          <Link href={"/foods/meal-type/appetizer"}>Appetizer</Link>

        </ul>
      </div>
</div>
      <div className=" w-[400px]  lg:mx-2 mx-4  flex lg:flex-row flex-col "> 
      <p >Lezzet dolu bir yolculuğa çıkmaya hazır mısınız? Yemek tarifleri sayfamızda, evinizin konforunda hazırlayabileceğiniz birbirinden lezzetli ve pratik tarifler sizleri bekliyor. Kahvaltıdan akşam yemeğine, tatlılardan atıştırmalıklara kadar her damak zevkine uygun seçeneklerle mutfağınıza renk katın. İster yeni başlayan ister deneyimli bir aşçı olun, adım adım anlatımlarla yemek yapmak artık çok daha keyifli! Hadi, mutfağa girin ve yaratıcılığınızı konuşturun!
      
      </p></div>
      <div className="flex justify-center items-center">
      <h1 className="mx-4 text-5xl" >
      𝕽𝖊𝖈𝖎𝖕𝖊𝖘 𝕱𝖔𝖔𝖉 

      </h1>
      </div>

  <div className=" flex justify-center items-center text-white border-t pt-2 w-full">
        Copyright © 2025 Recipesfree.net. All Rights Reserved
      </div>
    </div>
  
  );
};

export default Footer;
