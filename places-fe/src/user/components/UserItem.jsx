const UsersItem = ({ user }) => {
  console.log({ user });
  return (
    <li className="text-lg font-bold">
      <div>
        <img src={user.image} alt={user.name} title={user.name} />
      </div>
      <div>
        <h2>{user.name}</h2> -{" "}
        <span>
          {user.placesCount} {user.placesCount === 1 ? "Place" : "Places"}
        </span>
      </div>
    </li>
  );
};

export default UsersItem;

// id, image, name, placeCount
