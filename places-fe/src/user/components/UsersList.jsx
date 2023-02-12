import UsersItem from "./UserItem";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <h2
        className="text-center mx-auto w-max
    "
      >
        No user found
      </h2>
    );
  }

  console.log({ items });

  return (
    <ul>
      {items.map((item) => (
        <UsersItem user={item} key={item.id} />
      ))}
    </ul>
  );
};

export default UsersList;
