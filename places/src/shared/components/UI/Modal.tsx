import { createPortal } from "react-dom";
import { ModalOverlayProps } from "../../../types/types";

const ModalOverlay = ({ extraClasses }: ModalOverlayProps) => {
  const content = (
    <div
      className={`${extraClasses} w-full h-screen bg-teal-900/40 absolute top-0 right-0 z-50`}
    >
      <header>
        <h2></h2>
      </header>
      <form></form>
    </div>
  );

  return createPortal(content, document.getElementById("modal") as HTMLElement);
};

const Modal = () => {
  return <div>Modal</div>;
};

export default Modal;
