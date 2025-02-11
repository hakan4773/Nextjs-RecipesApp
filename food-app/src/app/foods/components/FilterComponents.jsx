"use client";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Stack,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";

const FilterComponents = ({ foods, setCurrencies }) => {
  const [cuisine, setCuisine] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [foodkcal, setFoodKcal] = useState([]);
  const [difficult, setDifficult] = useState([]);

  const kcal = ["0-100", "100-200", "200-300", "300-500", "500+"];
  const difficulty = ["easy", "medium", "hard"];

  const uniqueCuisine = Array.from(new Set(foods.map((fd) => fd.cuisine)));


 console.log(foodkcal)

  const applyFilterSelect = () => {
    let filteredItems = foods;

    if (cuisine) {
      filteredItems = filteredItems.filter((item) => item.cuisine === cuisine);
    }

    if (ratingFilter === "4.5+") {
      filteredItems = filteredItems.filter((item) => item.rating >= 4.5);
    } else if (ratingFilter === "4.5-") {
      filteredItems = filteredItems.filter(
        (item) => item.rating >= 3.5 && item.rating < 4.5
      );
    }
 
    if (difficult.length > 0)  {
      filteredItems = filteredItems.filter(item => difficult.includes(item.difficulty.toLowerCase()));
    }


if(foodkcal.length >0) {
filteredItems=filteredItems.filter((item)=>{

return foodkcal.some(range=>{
if(range==="0-100"){
return item.caloriesPerServing >= 0 && item.caloriesPerServing <= 100;

}
else if(range==="100-200"){
  return item.caloriesPerServing >= 101 && item.caloriesPerServing <= 200;
}
else if(range==="200-300"){
  return item.caloriesPerServing >= 201 && item.caloriesPerServing <= 300;
}
else if(range==="300-500"){
  return item.caloriesPerServing >= 301 && item.caloriesPerServing <= 500;
}
else if(range==="500+"){
  return item.caloriesPerServing >= 501 ;
}
return false;

})

})

}


    setCurrencies(filteredItems);
  };
  const clearFilters = () => {
    setCuisine("");
    setRatingFilter("");
    setDifficult([]);
    setFoodKcal([]);
    setCurrencies(foods);
  };



  const handlechangekcal = (e) => {
    const { value } = e.target;
    setFoodKcal(typeof value === "string" ? value.split(",") : value);
  };
  const handlechangedif = (e) => {
    const { value } = e.target;
    setDifficult(typeof value === "string" ? value.split(",") : value);
  };
 
  return(
    <div className="flex    lg:flex-row flex-wrap gap-4 border-b-2  ">
      <div className="flex lg:flex-row flex-wrap mx-10">
        <FormControl sx={{ width: { xs: '100%', lg: '250px' }, padding: 1 }}>
          <InputLabel id="demo-multiple-checkbox-label">Cuisine</InputLabel>

          <Select
            size="small"
            value={cuisine}
            label="All"
            onChange={(e)=>setCuisine(e.target.value)}
          >
            {uniqueCuisine.map((cuisine) => (
              <MenuItem key={cuisine} value={cuisine}>
                {cuisine}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl component="fieldset" sx={{ width: { xs: '100%', lg: '250px' }, padding: 1 }}>
          <InputLabel id="demo-multiple-checkbox-label">KCAL</InputLabel>
          <Select
            multiple
            size="small"
            input={<OutlinedInput label="KCAL" />}
            renderValue={(selected) => selected.join(", ")}
            value={foodkcal}
            onChange={handlechangekcal}
          >
            {kcal.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={foodkcal.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl component="fieldset" sx={{width: { xs: '100%', lg: '250px' }, padding: 1 }}>
          <InputLabel>Difficultly</InputLabel>

          <Select
            multiple
            size="small"
            value={difficult}
            onChange={handlechangedif}
            input={<OutlinedInput label="Difficultly" />}
            renderValue={(selected) => selected.join(",")}
          >
            {difficulty.map((dif) => (
              <MenuItem key={dif} value={dif}>
                <Checkbox checked={difficult.includes(dif)} />
                <ListItemText primary={dif}></ListItemText>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ mx: 2 }}>
          <FormLabel id="demo-radio-buttons-group-label">Rating</FormLabel>
          <RadioGroup
            row
            value={ratingFilter}
            defaultValue="all"
            onChange={(e) => setRatingFilter(e.target.value)}
            name="radio-buttons-group"
          >
            <FormControlLabel value="4.5+" control={<Radio />} label="4.5+" />
            <FormControlLabel value="4.5-" control={<Radio />} label="4.5-" />
          </RadioGroup>
        </FormControl>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          marginLeft={2}
          marginTop={2}
          marginBottom={6}
          spacing={2}
          width={300}
        >
          <Button
            variant="contained"
            className="lg:w-32 w-full h-12"
            onClick={applyFilterSelect}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            color="error"
            className="lg:w-32 w-full h-12  "
            onClick={clearFilters}
          >
            Clear Filter
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default FilterComponents;
