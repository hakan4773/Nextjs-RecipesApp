"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import TourIcon from "@mui/icons-material/Tour";
import AlarmIcon from "@mui/icons-material/Alarm";

const page = () => {
  const { id } = useParams();
  const [food, setFood] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await res.json();
      setFood(data || []);
    }

    fetchdata();
  }, []);
  return (
    <div className="font-serif w-full flex flex-col justify-center items-center relative px-40 text-xl ">
     <h1 className="flex justify-center text-3xl p-4 font-bold">{food.name}</h1>  
     <img src={food.image} alt="recipe" className="h-[60vh] w-full " />

      <div className="flex flex-col w-full  ">
       
        <div className=" flex    bg-teal-400">
          <p className="font-sans m-2">
            <b>Cousinie: </b>
            {food.cuisine} <TourIcon />
          </p>
          <p className="font-sans m-2">
            <b>Meal Type: </b>
            {food.mealType}
          </p>
          <p className="font-sans m-2">
            <b>Prep Time Minutes: </b>
            {food.prepTimeMinutes} minute <AlarmIcon />
          </p>
          <p className="font-sans m-2">
            <b>CookTimeMinutes: </b>
            {food.cookTimeMinutes} minute <AlarmIcon />
          </p>

          <p className="font-sans m-2">
            <b>Difficulty: </b>
            {food.difficulty}{" "}
          </p>

          <p className="font-sans m-2">
            <b>Calories Per Serving: </b>
            {food.caloriesPerServing} Kcal
          </p>
          <p className="font-sans m-2">
            <b>Servings: </b>
            {food.servings} 
          </p>
        </div>

        <ul className="p-4 mx-2">
          <b> Food ingredients :</b>
          {food?.ingredients?.map((ing, index) => (
                          <li key={index} >-{ing}</li>
                      ))} 

        </ul>
        <ul className="p-4 mx-2">

          <b> Food instructions :</b>
           {food?.instructions?.map((ing, index) => (
                          <li key={index} >-{ing}</li>
                      ))} 
        </ul>
        
      </div>

      <div>
        <h1 className="font-bold px-6">History</h1>

        
        <p className="px-6 text-xl">
          Pizza (İtalyanca: [ˈpittsa], Napoliten: [ˈpittsə]), domates, peynir ve
          genellikle çeşitli diğer malzemelerle (mantar, soğan, zeytin, ananas,
          et vb.) yenen bir yemektir. Üstü genellikle yuvarlak, düz bir mayalı
          buğday bazlı hamur tabanından oluşan İtalyan kökenli bir yemektir.
          Geleneksel olarak taş fırında yüksek sıcaklıkta pişirilir.[1] Küçük
          bir pizzaya bazen pizzetta denir. Pizza yapan bir kişi pizzaiolo
          olarak bilinir. İtalya'da bir restoranda servis edilen pizza,
          dilimlenmeden sunulur ve bıçak ve çatal kullanılarak yenir.[2][2]
          Ancak gündelik ortamlarda, elde tutularak yenmek üzere dilimler
          halinde kesilir. Pizza terimi ilk olarak 10. yüzyılda Campania
          sınırındaki Lazio'daki Güney İtalya kasabası Gaeta'dan bir Latin el
          yazmasında kaydedildi.[3] Modern pizza Napoli'de icat edildi ve yemek
          ve çeşitleri o zamandan beri birçok ülkede popüler hale geldi.[4]
          Dünyanın en popüler gıdalarından biri ve Avrupa, Kuzey Amerika ve
          Avustralasya'da yaygın bir fast food öğesi haline geldi; pizzacılarda
          (pizza konusunda uzmanlaşmış restoranlar), pizza teslimi yoluyla ve
          sokak yemeği olarak Akdeniz mutfağı sunan restoranlarda mevcuttur.[4]
          Çeşitli gıda şirketleri, ev fırınında tekrar ısıtılmak üzere
          marketlerde dondurulabilecek hazır pişmiş pizzalar satmaktadır.
          2017'de dünya pizza pazarı 128 milyar ABD dolarıydı ve ABD'de 76.000
          pizzacıya yayılmış 44 milyar dolardı.[5] Genel olarak, 2 yaş ve
          üzerindeki ABD nüfusunun %13'ü herhangi bir günde pizza
          tüketmiştir.[6] Associazione Verace Pizza Napoletana (Lafzen Gerçek
          Napoliten Pizza Derneği) 1984 yılında kurulmuş, merkezi Napoli'de
          bulunan ve geleneksel Napoliten pizzasını tanıtmayı amaçlayan kar
          amacı gütmeyen bir kuruluştur.[7] Napoli pizza, 2009 yılında
          İtalya'nın talebi üzerine Avrupa Birliği'ne Geleneksel Özellik
          Garantili yemek olarak tescil edildi[8][9] ve 2017'de yapım sanatı
          UNESCO'nun somut olmayan kültürel miras listesine dahil edildi.[10]
        </p>

<div className="p-6 text-blue-950 text-xl "><h1 className="border-b">COMMENTS</h1></div>
 <p className="px-6"> Henüz yorum yok</p>
      </div>
    </div>
  );
};

export default page;
