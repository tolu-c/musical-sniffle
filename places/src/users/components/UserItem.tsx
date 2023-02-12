import { User } from "../../types/types";

const UserItem = ({ name, image, placesCount }: User) => {
  return (
    <li>
      <div>
        <img src={image} alt={name} title={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>
          {placesCount} {placesCount === 1 ? "Place" : "Places"}
        </p>
      </div>
    </li>
  );
};

export default UserItem;
