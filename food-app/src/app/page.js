import Image from "next/image";
import menu from "../../public/recipe.avif"
import Contents from "./components/Contents";
import Tags from "./components/Tags";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col  min-w-[410px]">
       <div className="relative"> 
        
        <Image
          className="w-full h-[400px] "
          src={menu}
          alt="food"
         
    
        />



<div  className="absolute  flex   flex-col lg:top-1/3 top-1/2 lg:left-1/3 left-24   text-center ">
<Link href="/foods"  className="bg-red-900 placeholder:w-40 lg:w-80 lg:mx-2   border p-1 rounded-md text-white     shadow-2xl lg:text-4xl text-xl text-bold">Hemen Yolculuğa Başlayın</Link>
</div>
</div>
<Contents />


<Tags />
    </div>
  );
}
