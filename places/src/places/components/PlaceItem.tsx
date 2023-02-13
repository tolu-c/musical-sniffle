import Card from "../../shared/components/UI/Card";
import Button from "../../shared/components/UI/FormElements/Button";
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
        <div className="flex flex-col gap-y-1.5 items-center">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="w-full flex justify-evenly items-center">
          <Button size="normal" buttonStyle="primary">
            View on map
          </Button>
          <Button to={`edit`} size="normal" buttonStyle="primary">
            Edit
          </Button>
          <Button buttonStyle="danger" size="normal">
            Delete
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
