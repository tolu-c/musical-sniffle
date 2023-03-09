import { createPortal } from "react-dom";
import { ModalOverlayProps, ModalProps } from "../../../types/types";
import { FormEvent, Fragment } from "react";

const ModalOverlay = (
  { extraClasses }: ModalOverlayProps,
  { header, onSubmit, children, footerContent }: ModalProps
) => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit;
    }
  };

  const content = (
    <div className={`${extraClasses}`}>
      <header>
        <h2>{header}</h2>
      </header>
      <form onSubmit={submitHandler}>
        <div>{children}</div>
        <footer>{footerContent}</footer>
      </form>
    </div>
  );

  return createPortal(content, document.getElementById("modal") as HTMLElement);
};

const Modal = () => {
  return (
    <Fragment>
      <div className="w-full h-screen bg-teal-900/40 absolute top-0 right-0 z-50">
        this is a modal component
      </div>
    </Fragment>
  );
};

export default Modal;
