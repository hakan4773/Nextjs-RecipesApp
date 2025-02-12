"use client";
import React, { useState } from "react";
import diet from "../../../public/diet.jpg";
import Image from "next/image";

import {  Box, Button,  MenuItem, Select, Slider } from "@mui/material";
import { useRouter } from "next/navigation";

const page = () => {
  const router=useRouter();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");

  const CalculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height/100);

    const calculatedBMI = weightNum / (heightNum * heightNum);
    if (
      isNaN(weightNum) ||
      isNaN(heightNum) ||
      weightNum <= 0 ||
      heightNum <= 0
    ) {
      alert("Lütfen geçerli bir kilo ve boy giriniz!");
      return;
    }
    setBmi(calculatedBMI.toFixed(2));


if(calculatedBMI < 18.5){
setMessage("Boyunuza göre kilonuz düşük. Dengeli beslenme ve düzenli egzersizle ideal kiloya ulaşmanız sağlığınız için faydalı olabilir.");
setCategory("Zayıf")
}
else if(calculatedBMI >= 18.5 && calculatedBMI < 25){
  setMessage("Boyunuza göre kilonuz ideal seviyede. Mevcut kilonuzu korumak için dengeli beslenmeye ve aktif kalmaya devam edin.");
  setCategory("Normal")

}
else if(calculatedBMI >= 25 && calculatedBMI < 30){
  setMessage("Boyunuza göre kilonuz normalin biraz üzerinde. Sağlıklı bir diyet ve düzenli fiziksel aktivite ile kilonuzu yönetmek uzun vadede fayda sağlayabilir.");
  setCategory("Kilolu")

}
else if(calculatedBMI >= 30 && calculatedBMI < 40){
  setMessage("Boyunuza göre kilonuz idealin oldukça üzerinde. Uzman bir diyetisyen ve doktorla görüşüp beslenme ve egzersiz alışkanlıklarınızı gözden geçirmeniz faydalı olabilir.Randevu almak ister misin");
  setCategory("Obez")

}
else if(calculatedBMI >= 40){
  setMessage("Boyunuza göre kilonuz ciddi bir seviyede yüksek. Sağlığınız için bir uzmandan profesyonel destek alarak kilo verme planı oluşturmanız önemlidir.");
  setCategory("Aşırı Obez")

}

  };
  const marks = [
  { value: 0, label: "Zayıf" },
  { value: 18.5, label: "Normal" },
  { value: 25, label: "Kilolu" },
  { value: 30, label: "Obez" },
  { value: 40, label: "Aşırı Obez" },
];

function valuetext(value) {
  return `${value}kg/m²`;
}
 
  return (
    <div className="min-w-[400px] font-sans bg-slate-100 lg:p-24 p-2 text-lg">
        <Image src={diet} alt='diet' className='w-full h-72' width={700} height={100}></Image>
     
      <h1 className="text-3xl p-2 font-bold text-blue-900">Diyet Nedir?</h1>
      <p className="p-2">
        Diyet, bireyin sağlıklı bir yaşam sürmesi, ideal kilosunu koruması ya da
        belirli sağlık hedeflerine ulaşması için belirli bir düzen ve plana göre
        tükettiği yiyecek ve içeceklerin genel adıdır. Diyet yalnızca kilo
        vermek amacıyla yapılan bir süreç değil, sağlıklı bir yaşam tarzını
        benimsemek için sürdürülebilir bir beslenme alışkanlığıdır. Diyetler,
        bireylerin hedeflerine, yaşam tarzına ve sağlık durumuna bağlı olarak
        farklı şekillerde sınıflandırılabilir:
      </p>
      <ul className="p-2  ">
        <li className="">
          <b>Kilo Kontrolüne Yönelik Diyetler:</b>
          Kilo Vermek için Diyet: Düşük kalorili ve dengeli beslenme esas
          alınır. Kilo Almak için Diyet: Kalori alımını artırmayı hedefler ve
          sağlıklı besinlerle desteklenir.
        </li>
        <li>
          <b>Sağlık Durumuna Yönelik Diyetler:</b>
          Düşük Karbonhidrat Diyeti: Özellikle diyabet ve insülin direnci olan
          bireyler için tercih edilir. Tuzsuz Diyet: Yüksek tansiyon veya böbrek
          hastalıkları olan bireyler için önerilir. Glütensiz Diyet: Çölyak
          hastaları veya glüten intoleransı olanlar için uygun bir plandır.
        </li>
        <li>
          <b>Felsefi ve Etik Yaklaşımlara Göre Diyetler:</b>
          Vegan Diyeti: Hayvansal ürünlerin hiçbirini içermeyen bir beslenme
          tarzıdır. Vejetaryen Diyeti: Et tüketimini dışlayan, ancak süt ve
          yumurta gibi hayvansal ürünleri içerebilen bir diyet türüdür.
        </li>
      </ul>
      <p className="p-2">
        <span className="text-lg font-bold">
          Diyet Yaparken Dikkat Edilmesi Gerekenler
        </span><br></br>
        <b>Uzman Danışmanlığı:</b>
        Diyet, sağlık profesyonelleri veya diyetisyenler tarafından kişiye özel
        hazırlanmalıdır.
        <b>Denge ve Çeşitlilik:</b> Vücudun ihtiyaç duyduğu tüm besin gruplarını
        içeren dengeli bir plan izlenmelidir.<br></br>
        <b>Sürdürülebilirlik:</b> Kısa süreli, aşırı kısıtlayıcı diyetler yerine
        uzun vadede uygulanabilir bir beslenme tarzı tercih edilmelidir.<br></br>
        <b>Fiziksel Aktivite:</b> Diyet, düzenli egzersizle desteklenmelidir. Diyetin
        Faydaları Sağlıklı bir kiloya ulaşmaya yardımcı olur. Kronik
        hastalıkların (diyabet, kalp hastalıkları, obezite) önlenmesini
        destekler. Enerji seviyelerini artırır ve günlük performansı
        iyileştirir. Bağışıklık sistemini güçlendirir ve genel sağlık durumunu
        iyileştirir. Diyet, bireysel ihtiyaçlara göre planlandığında ve doğru
        bir şekilde uygulandığında sağlıklı bir yaşam için güçlü bir araçtır.
        Sağlıklı beslenme, yalnızca fiziksel sağlığı değil, aynı zamanda ruhsal
        dengeyi ve yaşam kalitesini de olumlu yönde etkiler.
      </p>

      <div className="flex flex-col  ">
        <h1 className="text-xl font-bold text-blue-900">Vücut Kitle Endeksi Nedir?</h1>

        <p className="p-2">
          Vücut kitle indeksi (VKİ), bir kişinin kilo ve boy oranını
          değerlendirerek vücut ağırlığının sağlık açısından uygun olup
          olmadığını belirlemek için kullanılan bir ölçüttür. VKİ, kilogram
          cinsinden ağırlığın, metre cinsinden boyun karesine bölünmesiyle
          hesaplanır. Sonuç, bireyin zayıf, normal kilolu, fazla kilolu veya
          obez kategorilerinden hangisinde olduğunu belirlemek için kullanılır.
          Genellikle yetişkinlerde kilo yönetimi ve sağlık risklerini
          değerlendirmek için kullanılan bu ölçüt, kişisel faktörler ve
          kas-kütle oranı gibi değişkenler göz önünde bulundurularak
          yorumlanmalıdır.
        </p>
      </div>

      <div className="flex justify-center items-center  text-blue-900 w-full flex-col   ">

        <div className="w-full bg-blue-500 text-white p-3 text-xl font-bold rounded-sm ">
          Vücut Kitle Endeksi Hesaplama Aracı
        </div>
<div className="lg:flex  bg-white w-full gap-8 ">
        <div className="flex  flex-col p-4 ">


          <div className=" lg:space-x-16 space-x-8   flex  ">
            <label className="font-bold  ">Boyunuz</label>
            <div>
              <input type="number" min={1} className="text-xl font-bold border rounded-md p-2 lg:w-28 w-20 mx-12" value={height} onChange={(e)=>setHeight(e.target.value)}></input>
              <span className=" font-bold">cm</span>
            </div>
          </div>
          <div className="lg:w-[400px] w-[350px] pt-6">
            <Slider
            value={height}
            onChange={(e)=>setHeight(e.target.value)}
              defaultValue={50}
              max={300}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
          <div className=" lg:space-x-16  space-x-8  flex  ">
            <label className="font-bold  ">Kilonuz</label>
            <div>
              <input type="number" min={1} max={300} value={weight} onChange={(e)=>setWeight(e.target.value)}
               className="text-xl font-bold border rounded-md p-2 w-28 mx-12"></input>
              <span className=" font-bold">kg</span>
            </div>
          </div>
          <div className="lg:w-[400px] w-[350px]  pt-6 ">
            <Slider
              value={weight}
              max={300}
            
              onChange={(e)=>setWeight(e.target.value)}
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
          <div className="  w-[40%] flex  ">
<div className="flex">
              <label className="font-bold  ">Yaşınız</label>
              <input value={age} min={1}  onChange={(e)=>setAge(e.target.value)} type="number" 
              className="text-xl font-bold border rounded-md p-2 w-16 mx-4"></input>
</div>
<div className="flex">
              <label className="font-bold  ">Cinsiyetiniz</label>
              
              <Select className="text-xl font-bold border rounded-md mx-2 lg:w-32 w-24"
              value={gender} onChange={(e)=>setGender(e.target.value)}
              >
                <MenuItem value="Male"> Male
                </MenuItem>
                <MenuItem value="Female"> Female
                </MenuItem>
              </Select>
</div>
          </div>


          <div className=" pt-8 ">
<Button className="w-full" onClick={CalculateBMI}  variant="contained">VKİ Hesapla</Button>
</div>

       
       
        
        </div>

        <div className="p-4 w-1/2">
      <h1 className="font-bold font-sans">Vücut Kitle İndeksiniz:</h1>  
       


     <div style={{ margin: "20px auto" }}  className="lg:w-[500px] w-[400px] ">
      <Slider
        aria-label="Custom marks"
        marks={marks}
        valueLabelDisplay="auto"
        min={0}
        max={50}
        disabled
        value={bmi ? bmi:100}
        getAriaValueText={valuetext}
        sx={{
          height: 8,
          "& .MuiSlider-markLabel": {
            mt: 3, // Etiketlerin yukarıdaki boşluğunu ayarlar
          },
          "& .MuiSlider-track": {
            background: `linear-gradient(
              to right,
              #4caf50 0%, #4caf50 37%, /* Yeşil */
              #ffeb3b 37%, #ffeb3b 50%, /* Sarı */
              #ff9800 50%, #ff9800 60%, /* Turuncu */
              #f44336 60%, #f44336 80%, /* Kırmızı */
              #9c27b0 80%, #9c27b0 100% /* Mor */
            )`,
          },
          "& .MuiSlider-rail": {
            opacity: 0.3, // Arka planın görünürlüğü azaltıldı
          },
        }}
      />
      
    
    </div> 
     <div className="text-xl flex flex-col justify-center items-center p-9 font-bold">
      <span className="text-xl text-black">Vucüt Kitle İndeksiniz : {bmi} </span> 
      <h1 className="text-2xl font-bold">{category}</h1>
      </div> 


<div className="">{message}</div>

 <div className="flex justify-center">{message && <Button onClick={()=>router.push("/foods")} sx={{marginTop:2,opacity:75}} variant="contained"  color="error">Size uygun diyete başlayın</Button>}</div>
        </div>

        </div>

      
      </div>


      
    </div>
  );
};

export default page;
