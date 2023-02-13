import Card from "../../shared/components/UI/Card";
import { Place, Places } from "../../types/types";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ places }: Places) => {
  if (places.length === 0)
    return (
      <Card>
        <h2>No Places found. Create One?</h2>
        <button type="button">Share Place</button>
      </Card>
    );

  return (
    <ul>
      {places.map((place: Place) => (
        <PlaceItem
          key={place.placeID}
          placeID={place.placeID}
          address={place.address}
          title={place.title}
          description={place.description}
          imageUrl={place.imageUrl}
          userID={place.userID}
          location={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
