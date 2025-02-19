"use client";
import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AlarmIcon from "@mui/icons-material/Alarm";
import TourIcon from "@mui/icons-material/Tour";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import { Button } from "@mui/material";
import FilterComponents from "./components/FilterComponents";
import { Rating } from "@mui/material";
import ReviewComponents from "./components/ReviewComponents";
import {  useRouter } from "next/navigation";

const Page = () => {

  const router=useRouter();
  const [expanded, setExpanded] = useState("" || false);
  const [foods, setFoods] = useState([]);
  const [cuurencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await fetch(`https://dummyjson.com/recipes`, {
          next: { revalidate: 60 },
        });
        const data = await res.json();
        setFoods(data.recipes || []);
        setCurrencies(data.recipes || []);

      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    }
    fetchdata();
  }, []);

  console.log(cuurencies);

  const handleChange = (panel) => (event, isExpended) => {
    setExpanded(isExpended ? panel : false);
  };

  return (
    <div className="flex flex-col min-h-[600px]  space-y-4 p-2 ">
      <FilterComponents foods={foods}  setCurrencies={setCurrencies} />
    
      {cuurencies?.map((fd) => (
        <div key={fd.id} className="w-full "> <h2 className="m-2 font-sans">
                <b>{fd.name}</b>

              </h2>

          <div className=" flex lg:flex-row flex-col lg:items-start gap-6 ">
              <img
              src={fd.image}
              alt="recipe"
              className="rounded-md p-2 lg:w-[300px] w-[500px] lg:h-[200px] h-[300px]"
            />        
            <div className=" flex lg:flex-col flex-row space-y-2 w-auto  ">
             
              <p className="font-sans m-2">
                <b>Cousinie: </b>
                {fd.cuisine} <TourIcon />
              </p>
              <p className="font-sans m-2 ">
                <b>Meal Type: </b>
                {fd.mealType+" "}
              </p>
              <p className="font-sans m-2">
                <b>Prep Time: </b>
                {fd.prepTimeMinutes} minute <AlarmIcon />
              </p>
              <p className="font-sans ">
                <b>Cook Time </b>
                {fd.cookTimeMinutes} minute <AlarmIcon />
              </p>
            </div>

            <div  className="lg:mx-7 mx-0 flex lg:flex-col  flex-row">
              <p className="font-sans m-2">
                <b>Difficulty: </b>
                {fd.difficulty}{" "}
              </p>

              <p className="font-sans  pb-2 mx-3">
                <b>Rating: </b>
                {fd.rating}
                <Rating
                  name="half-rating"
                  defaultValue={fd.rating}
                  sx={{ padding: 1 }}
                  precision={0.5}
                />
              </p>
              <p className="font-sans ">
                <b>Calories Per Serving: </b>
                {fd.caloriesPerServing} Kcal
              </p>

            </div>
      <div className="lg:mx-auto  space-y-6 flex flex-col">
            <Button variant="contained" color="primary" sx={{width:{xs  :"100%",md:350}}} 
              onClick={()=>router.push(`/foods/${fd?.id}`)}>More</Button>
              <ReviewComponents />
            </div>

          </div>  

    

<div>
          <Accordion 
            expanded={expanded === `panel1-${fd.id}`}
            onChange={handleChange(`panel1-${fd.id}`)}
            className="w-full"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ backgroundColor: "#dfb4b4" }}
            >
              <Typography component="span" >
                <ContentPasteIcon /> Click to see the ingredients
              </Typography>
            </AccordionSummary>
            {fd?.ingredients?.map((ing, index) => (
              <AccordionDetails sx={{ height: 30 }} key={index}>
                <li className="mx-4 font-serif ">{ing}</li>
              </AccordionDetails>
            ))}
          </Accordion>
 
          <Accordion 
            expanded={expanded === `panel2-${fd.id}`}
            onChange={handleChange(`panel2-${fd.id}`)}
            className="w-full"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ backgroundColor: "#dfb4b4" }}
            >
              <Typography component="span" >
                <OutdoorGrillIcon />
                How to make
              </Typography>
            </AccordionSummary>
            {fd.instructions.map((item,index) => (
              <AccordionDetails key={index}>
                <li className="mx-4 font-serif">{item}</li>
              </AccordionDetails>
            ))}
          </Accordion>
</div>

          

        </div>
      ))}
    </div>
  );
};

export default Page;
