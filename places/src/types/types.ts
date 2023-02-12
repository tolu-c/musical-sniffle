export interface User {
  id: string;
  name: string;
  image: string;
  placesCount: number;
}

export interface Users {
  users: User[];
}
