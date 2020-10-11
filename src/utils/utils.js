import {STAR_TO_PERSENT} from "../const";

export const getRating = (rating) => {
  return Math.round(rating) * STAR_TO_PERSENT;
};

export const getUniqueCities = (offers) =>{
  const cities = offers.map((offer) => offer.city);
  return Array.from(new Set(cities));
};
