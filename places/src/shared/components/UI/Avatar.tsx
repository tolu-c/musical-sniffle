import { AvatarProps } from "../../../types/types";

const Avatar = ({ image, alt }: AvatarProps) => {
  return (
    <div className="w-24 h-24">
      <img
        src={image}
        alt={alt}
        className="w-full h-full rounded-full object-left object-cover"
      />
    </div>
  );
};

export default Avatar;
