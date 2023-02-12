import { Users } from "../../types/types";
import UserItem from "./UserItem";

const UsersList = ({ users }: Users) => {
  if (users.length === 0) {
    return (
      <h2 className="w-max mx-auto text-lg font-medium">No users found</h2>
    );
  }
  return (
    <ul className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placesCount={user.placesCount}
        />
      ))}
    </ul>
  );
};

export default UsersList;
