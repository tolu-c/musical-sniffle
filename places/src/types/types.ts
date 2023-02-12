import { ReactNode } from "react";
export interface User {
  id: string;
  name: string;
  image: string;
  placesCount: number;
}

export interface Users {
  users: User[];
}

export interface AvatarProps {
  image: string;
  alt: string;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface SideBarProps {
  onClose: () => void;
}
