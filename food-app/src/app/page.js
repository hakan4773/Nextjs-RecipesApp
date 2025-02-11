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



<div  className="absolute  flex   flex-col lg:top-1/3 lg:left-1/3 top-1/2   left-1/3 text-center ">
<Link href="/foods"  className="w-40 lg:w-80 lg:mx-2 mx-6  border p-1 rounded-md text-white   hover:text-4xl shadow-2xl lg:text-4xl text-xl text-bold">Hemen Yolculuğa Başlayın</Link>
</div>
</div>
<Contents />


<Tags />
    </div>
  );
}
