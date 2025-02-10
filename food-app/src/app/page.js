import Image from "next/image";
import menu from "../../public/recipe.avif"
import Contents from "./components/Contents";
import Tags from "./components/Tags";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col  ">
        <Image
          className="w-full h-[500px]  opacity-90"
          src={menu}
          alt="food"
          width={1000}
          height={500}
        />
<div  className="absolute top-40 flex  flex-col left-1/3  space-y-8 items-center text-center">
<h1 className="text-4xl    shadow-2xl text-white">Hemen Yolculuğa Başlayın</h1>
<Link href="/foods"  className="border p-1 w-40 rounded-md text-black bg-white  hover:text-2xl shadow-2xl text-2xl text-bold">Start</Link>
</div>
<Contents />


<Tags />
    </div>
  );
}
