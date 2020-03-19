import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropDown";

const SearchParams = () => {
  const [location, setLocation] = useState("San Jose, CA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown] = useDropDown("Breed", "", breeds);

  return (
    <div className="location">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location" className="form-label">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown></BreedDropDown>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
