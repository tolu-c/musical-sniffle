import Avatar from "../../shared/components/UI/Avatar";
import Card from "../../shared/components/UI/Card";
import { User } from "../../types/types";
import { Link } from "react-router-dom";

const UserItem = ({ name, image, placesCount, id }: User) => {
  return (
    <li>
      <Link to={`/${id}/places`}>
        <Card>
          <Avatar image={image} alt={name} />
          <div className="flex flex-col items-center gap-y-1">
            <h2 className="text-lg font-semibold text-teal-900 group-hover:text-teal-100">
              {name}
            </h2>
            <p
              className="text-sm italic font-medium text-teal-600 group-hover:text-teal-200 w-max
            "
            >
              {placesCount} {placesCount === 1 ? "Place" : "Places"}
            </p>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default UserItem;
