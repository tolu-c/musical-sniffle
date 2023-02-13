import { Place } from "../../types/types";
import PlaceList from "../components/PlaceList";

const PLACES: Place[] = [
  {
    placeID: "p1",
    title: "University of Ibadan",
    description: "Premiere university in West Africa",
    imageUrl:
      "https://i1.wp.com/www.vanguardngr.com/wp-content/uploads/2020/01/University-of-Ibadan.jpg?fit=1600%2C1066&ssl=1",
    location: {
      lat: 7.4425475,
      lng: 3.8945938,
    },
    userID: "u1",
    address: "Oduduwa Road, 200132, Ibadan, Oyo",
  },
  {
    placeID: "p2",
    title: "University of Ibadan",
    description: "Premiere university in West Africa",
    imageUrl:
      "https://i1.wp.com/www.vanguardngr.com/wp-content/uploads/2020/01/University-of-Ibadan.jpg?fit=1600%2C1066&ssl=1",
    location: {
      lat: 7.4425475,
      lng: 3.8945938,
    },
    userID: "u2",
    address: "Oduduwa Road, 200132, Ibadan, Oyo",
  },
];

const Places = () => {
  return <PlaceList places={PLACES} />;
};

export default Places;
