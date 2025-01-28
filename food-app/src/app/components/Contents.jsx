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
    <div className="flex flex-col bg-black text-white">
      <div className="flex justify-center items-center mt-6">
        <h1 className="text-3xl ">CONTENTS</h1>
      </div>

      <Stack direction="column" sx={{mt:4}} >
        <Stack direction="row" sx={{mx:2}}>
          <Image src={recipe} width={200} height={100} alt="recipe" className="rounded-md p-2" />
          <p><span className="font-bold text-xl mx-2 ">1- Yemek Tarifleriyle Lezzetli Anlar</span>
            Yemek yapmak, sadece bir ihtiyaç
            değil, aynı zamanda bir sanat ve tutkudur. Her tarif, farklı
            kültürlerden bir hikaye taşır ve mutfağınıza yepyeni lezzetler
            getirir. Pratik Tarifler: Günlük hayatın koşuşturmasında hızlı ama
            lezzetli yemekler hazırlamak ister misiniz? 15 dakikada
            hazırlanabilecek makarna soslarından, kolay çorba tariflerine kadar
            pek çok seçenek mevcut. Geleneksel Lezzetler: Anne tariflerinden
            esinlenen yemeklerle nostaljik bir yolculuğa çıkabilirsiniz. Bir
            kasede sıcacık mercimek çorbası ya da fırından yeni çıkmış
            böreklerle sofranıza samimi bir hava katın. Tatlı Molası: Tatlı
            severler için hafif sütlü tatlılardan çikolatalı keklere kadar geniş
            bir yelpaze var. Yemekten sonra kendinizi şımartmayı unutmayın!
            Mutfağa adım atmak için geç kalmayın; kendi tariflerinizi keşfedin
            ve paylaşmanın keyfini çıkarın. Her yemek, sevdiklerinizle
            geçirdiğiniz anları tatlandırır. Şimdi, en sevdiğiniz tarifi seçin
            ve mutfağın büyülü dünyasına dalın! Yemek Tariflerine Göz atmayı Unutmayın.😊
        <Link href={"/foods"} className="mx-2  p-1 bg-none rounded-full border">  <ArrowForwardIcon ></ArrowForwardIcon></Link>
          </p>

        </Stack>

        <Stack direction="row" sx={{mx:2}}>
          <Image src={diet} width={200} height={100} alt="recipe" className="rounded-md p-2" />
          <p><span className="font-bold text-xl mx-2 ">2- Diyet Yaparken Sağlıklı ve Dengeli Beslenme
          </span>
          Diyet yapmak, yalnızca kilo vermek değil, sağlıklı bir yaşam tarzı benimsemek için harika bir adımdır. Doğru bir diyet programıyla hem kendinizi enerjik hissedebilir hem de vücudunuzun ihtiyaç duyduğu besinleri alabilirsiniz.
          Diyet sürecinde ufak kaçamaklar yapabilirsiniz, bu doğaldır. Önemli olan dengeli bir şekilde yolunuza devam etmektir. Hedeflerinizi hatırlayın, kendinizi ödüllendirin ve süreci bir yaşam tarzı haline getirin.

Unutmayın, diyet yapmak sadece fiziksel değil, zihinsel sağlığınızı da destekler. Sağlıklı beslenerek hem bedeninizi hem de ruhunuzu mutlu edin! 😊

<Link href={"/foods"} className="mx-2 p-1 bg-none rounded-full border">  <ArrowForwardIcon ></ArrowForwardIcon></Link>

          </p>
        </Stack>
        <Stack direction="row" sx={{mx:2}}>
          <Image src={meal} width={200} height={100} alt="recipe" className="rounded-md p-2" />
          <p><span className="font-bold text-xl mx-2 ">3- Öğünler ve Doğru Beslenme
         
          </span>
           <b>Kahvaltı</b>: Güne Enerjik Başlangıç
          Kahvaltı, günün en önemli öğünüdür. Gece boyunca dinlenen vücut, enerjiye ihtiyaç duyar.
          <b>Öğle Yemeği</b>: Enerjiyi Koruma Zamanı
           Öğle yemeği, günün en yoğun saatlerinde enerjinizi yüksek tutar.
           <b>Akşam Yemeği</b>: Hafif ve Dengeli
           Akşam yemeği, günün yorgunluğunu atmak için hafif ama doyurucu olmalıdır.
           <b>Ara Öğünler</b>: Sağlıklı Atıştırmalıklar
            Ana öğünler arasında sağlıklı ara öğünler ile kan şekerinizi dengede tutabilirsiniz.
            Dengeli bir beslenme düzeni, hem fiziksel hem de zihinsel sağlığınızı destekler. Öğünlerinizi planlayarak,
             hem sağlıklı bir yaşam tarzı oluşturabilir hem de yemeklerden keyif alabilirsiniz! 😊

             <Link href={"/foods"} className="mx-2 p-1 bg-none rounded-full border">  <ArrowForwardIcon ></ArrowForwardIcon></Link>

          </p>
        </Stack>

        <Stack direction="row" sx={{mx:2}}>
          <Image src={diet} width={200} height={100} alt="recipe" className="rounded-md p-2" />
          <p><span className="font-bold text-xl mx-2 ">4- Dünya Mutfakları: Kültürlerin Lezzet Yolculuğu

         
          </span>
          Her ülkenin mutfağı, kültürünün ve tarihinin bir yansımasıdır. Baharatların kokusundan, pişirme yöntemlerine kadar her detay, bir hikaye anlatır. 
          İşte dünyanın en sevilen mutfaklarından bazıları ve öne çıkan lezzetleri:
          İtalyan mutfağı,Türk mutfağı,Meksika mutfağı,Asya mutfağı,Orta Doğu Mutfağı
          Dünya mutfakları, insanların kültürlerini keşfetmenin en lezzetli yollarından biridir. Yeni tarifler deneyerek ya da bu mutfaklara özgü restoranları ziyaret ederek, dünyanın dört bir yanını tabaklarınızda keşfetmeye ne dersiniz? 🌍🍴
          <Link href={"/foods"} className="mx-2 p-1 bg-none rounded-full border">  <ArrowForwardIcon ></ArrowForwardIcon></Link>

          </p>
        </Stack>
      </Stack>
    </div>
  );
};

export default Contents;
