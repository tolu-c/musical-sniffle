import { User } from "../../types/types";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS: User[] = [
    {
      id: "u1",
      name: "Tolu Dev",
      image:
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      placesCount: 4,
    },
  ];
  return <UsersList users={USERS} />;
};

export default Users;
