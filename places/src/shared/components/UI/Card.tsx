import { ChildrenProps } from "../../../types/types";

const Card = ({ children }: ChildrenProps) => {
  return (
    <div className="rounded-lg shadow-lg hover:shadow-xl p-4 flex flex-col gap-y-2 justify-center items-center group cursor-pointer w-full">
      {children}
    </div>
  );
};

export default Card;

// this is a comment
