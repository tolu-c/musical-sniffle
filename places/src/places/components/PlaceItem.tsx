import { Fragment, useState } from "react";
import Card from "../../shared/components/UI/Card";
import Button from "../../shared/components/UI/FormElements/Button";
import { Place } from "../../types/types";
import Modal from "../../shared/components/UI/Modal";

const PlaceItem = ({
  placeID,
  address,
  userID,
  imageUrl,
  title,
  description,
  location,
}: Place) => {
  const [showMap, setShowMap] = useState<boolean>(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <Fragment>
      {showMap && (
        <Modal
          onClose={closeMapHandler}
          header={address}
          onSubmit={() => {}}
          footerContent={
            <Button onClick={closeMapHandler} buttonStyle="danger" size="small">
              Close
            </Button>
          }
        >
          <div className="w-full">
            <h2>the map</h2>
          </div>
        </Modal>
      )}
      <li className="w-full">
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
            <Button
              size="normal"
              buttonStyle="primary"
              onClick={openMapHandler}
            >
              View on map
            </Button>
            <Button
              to={`/places/${placeID}`}
              size="normal"
              buttonStyle="primary"
            >
              Edit
            </Button>
            <Button buttonStyle="danger" size="normal">
              Delete
            </Button>
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlaceItem;
