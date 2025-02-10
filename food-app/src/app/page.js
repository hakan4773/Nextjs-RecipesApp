import Image from "next/image";
import menu from "../../public/recipe.avif"
import Contents from "./components/Contents";
import Tags from "./components/Tags";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col  ">
       <div className="relative"> 
        
        <Image
          className="w-full h-[500px] "
          src={menu}
          alt="food"
          width={800}
          height={500}
        />



<div  className="absolute  flex  flex-col top-1/3 left-1/3 w-80  justify-center    items-center text-center">
<Link href="/foods"  className=" border p-1 rounded-md text-white   hover:text-4xl shadow-2xl text-4xl text-bold">Hemen Yolculuğa Başlayın</Link>
</div>
</div>
<Contents />


<Tags />
    </div>
  );
}
