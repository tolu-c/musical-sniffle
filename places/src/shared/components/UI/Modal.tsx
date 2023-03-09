import { createPortal } from "react-dom";
import { ModalProps } from "../../../types/types";
import { FormEvent, Fragment } from "react";

const Modal = (
  {
    onClose,
    extraClasses,
    header,
    onSubmit,
    children,
    footerContent,
  }: ModalProps,
  props: any
) => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit;
    }
  };

  const content = (
    <Fragment>
      <div
        className="w-full h-screen bg-teal-900/40 absolute top-0 right-0 z-50"
        onClick={onClose}
      >
        <div className={`${extraClasses}`}>
          <header>
            <h2>{header}</h2>
          </header>
          <form onSubmit={submitHandler}>
            <div>{children}</div>
            <footer>{footerContent}</footer>
          </form>
        </div>
      </div>
    </Fragment>
  );

  return createPortal(content, document.getElementById("modal") as HTMLElement);
};

export default Modal;
