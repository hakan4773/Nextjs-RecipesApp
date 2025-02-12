import Image from "next/image";
import React from "react";
import recipe from "../../../public/recipe.avif";
import diet from "../../../public/diyet.avif";
import meal from "../../../public/meal.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Stack } from "@mui/material";
import Link from "next/link";
const Contents = () => {
  return (
    <div className="flex flex-col bg-black text-white pb-4">
      <div className="flex justify-center items-center mt-6">
        <h1 className="text-3xl ">CONTENTS</h1>
      </div>
      <Stack direction="column" sx={{mt:4}} spacing={4} >
        <Stack direction="row" sx={{mx:2}} >
          <Image src={recipe} 
        
            alt="recipe" className="rounded-md p-2 lg:h-64 lg:w-1/2 w-44  h-80" />
          <p className="lg:text-xl text-sm w-full"><span className="font-bold lg:text-2xl text-sm mx-2 ">
            1-  Lezzetli Yemek Tarifleri</span><br></br>
            Günlük hayatın koşuşturmasında hızlı ama
            lezzetli yemekler hazırlamak ister misiniz? 15 dakikada hazırlanabilecek makarna soslarından, kolay çorba tariflerine kadar
            pek çok seçenek mevcut.
            Mutfağa adım atmak için geç kalmayın; kendi tariflerinizi keşfedin
            ve paylaşmanın keyfini çıkarın. Her yemek, sevdiklerinizle
            geçirdiğiniz anları tatlandırır. Şimdi, en sevdiğiniz tarifi seçin
            ve mutfağın büyülü dünyasına dalın! Yemek Tariflerine Göz atmayı Unutmayın.😊
        <Link href={"/foods"} className="mx-2  p-1 bg-none rounded-full border">  <ArrowForwardIcon ></ArrowForwardIcon></Link>
          </p>

        </Stack>

        <Stack direction="row" sx={{mx:2}}>
          <Image src={diet}  alt="recipe" className="rounded-md p-2 lg:h-64 lg:w-1/2 w-44  h-80" />
          <p className="lg:text-xl text-sm w-full"><span className="font-bold lg:text-2xl text-sm mx-2 ">2- Diyet ve Dengeli Beslenme
          </span>   <br></br>
          Diyet yapmak,sadece kilo vermek değil,sağlıklı bir yaşam tarzı
       anlamına da gelir.Doğru bir diyet programıyla hem
            kendinizi enerjik hissedebilir hem de vücudunuzun ihtiyaç duyduğu besinleri
             alabilirsiniz.
          Diyet sürecinde önemli olan
           dengeli bir şekilde yolunuza devam etmektir. Hedeflerinizi hatırlayın, 
           kendinizi ödüllendirin ve süreci bir yaşam tarzı haline getirin.
          Unutmayın,diyet yapmak sadece fiziksel değil, zihinsel sağlığınızı da
           destekler.Sağlıklı beslenerek hem bedeninizi hem de ruhunuzu mutlu edin! 😊

<Link href={"/diet"} className="mx-2 p-1 bg-none rounded-full border">  <ArrowForwardIcon ></ArrowForwardIcon></Link>

          </p>
        </Stack>
        <Stack direction="row" sx={{mx:2}}>
          <Image src={meal} alt="recipe" className="rounded-md p-2 lg:h-64 lg:w-1/2 w-44  h-80" />
          <p className="lg:text-xl text-sm w-full"><span className="font-bold lg:text-2xl text-sm mx-2 ">
            3-Öğünler ve Doğru Beslenme
         
          </span>   <br></br>
           Kahvaltı: Güne Enerjik Başlangıç
          Kahvaltı, günün en önemli öğünüdür. Gece boyunca dinlenen vücut, enerjiye ihtiyaç duyar.
          Öğle Yemeği: Enerjiyi Koruma Zamanı
           Öğle yemeği, günün en yoğun saatlerinde enerjinizi yüksek tutar.
           Akşam Yemeği: Hafif ve Dengeli
           Akşam yemeği, günün yorgunluğunu atmak için hafif ama doyurucu olmalıdır.
           Ara Öğünler: Sağlıklı Atıştırmalıklar
            Ana öğünler arasında sağlıklı ara öğünler ile kan şekerinizi dengede tutabilirsiniz.
            Dengeli bir beslenme düzeni, hem fiziksel hem de zihinsel sağlığınızı destekler. Öğünlerinizi planlayarak,
             hem sağlıklı bir yaşam tarzı oluşturabilir hem de yemeklerden keyif alabilirsiniz! 😊

             <Link href={"/foods"} className="mx-2 p-1 bg-none rounded-full border">  <ArrowForwardIcon ></ArrowForwardIcon></Link>

          </p>
        </Stack>

        <Stack direction="row" sx={{mx:2}}>
          <Image src={diet}  alt="recipe" className="rounded-md p-2 lg:h-64 lg:w-1/2 w-44  h-80" />
          <p className="lg:text-xl text-sm w-full"><span className="font-bold lg:text-2xl text-sm mx-2 ">4- Dünya Mutfakları

          </span>   <br></br>
          Her ülkenin mutfağı, kültürünün ve tarihinin bir yansımasıdır. Baharatların kokusundan, pişirme yöntemlerine kadar her detay, bir hikaye anlatır. 
          İşte dünyanın en sevilen mutfaklarından bazıları ve öne çıkan lezzetleri:
          İtalyan mutfağı,Türk mutfağı,Meksika mutfağı,Asya mutfağı vb.
          Dünya mutfakları, insanların kültürlerini keşfetmenin en lezzetli yollarından biridir. Yeni tarifler deneyerek ya da bu mutfaklara özgü restoranları ziyaret ederek, dünyanın dört bir yanını tabaklarınızda keşfetmeye ne dersiniz? 🌍🍴
          <Link href={"/foods"} className="mx-2 p-1 bg-none rounded-full border">  <ArrowForwardIcon ></ArrowForwardIcon></Link>

          </p>
        </Stack>
      </Stack>
    </div>
  );
};

export default Contents;
