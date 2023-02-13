import Card from "../../shared/components/UI/Card";
import { Place } from "../../types/types";

const PlaceItem = ({
  placeID,
  address,
  userID,
  imageUrl,
  title,
  description,
  location,
}: Place) => {
  return (
    <li>
      <Card>
        <div>
          <img src={imageUrl} alt={title} title={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div>
          <button type="button">View on map</button>
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
