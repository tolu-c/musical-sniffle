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

export interface IconProps {
  size: string;
  onClick?: () => void;
}

export interface Place {
  placeID: string;
  address: string;
  userID: string;
  imageUrl: string;
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Places {
  places: Place[];
}

export interface ButtonProps {
  href?: string;
  to?: string;
  size?: "small" | "large" | "normal";
  onClick?: () => void;
  children: ReactNode;
  buttonStyle?: "primary" | "danger" | "success";
  disabled?: boolean;
}

export interface ModalProps {
  header: string;
  onSubmit: () => void;
  children: ReactNode;
  footerContent: ReactNode;
}

export interface ModalOverlayProps {
  extraClasses?: string;
}
