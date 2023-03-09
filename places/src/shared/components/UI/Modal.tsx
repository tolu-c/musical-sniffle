import { createPortal } from "react-dom";
import { ModalProps } from "../../../types/types";
import { FormEvent } from "react";

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
      onSubmit();
    }
  };

  const content = (
    <div
      className="w-full h-screen bg-teal-900/40 absolute top-0 right-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className={`${extraClasses} w-5/6 md:w-3/4 lg:w-1/2 mx-auto rounded-lg bg-white overflow-hidden`}
      >
        <header className="bg-teal-900 p-2">
          <h2 className="text-white text-base md:text-lg lg:text-xl font-medium md:font-bold">
            {header}
          </h2>
        </header>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div className="p-2">{children}</div>
          <footer className="flex justify-end p-3">{footerContent}</footer>
        </form>
      </div>
    </div>
  );

  return createPortal(content, document.getElementById("modal") as HTMLElement);
};

export default Modal;
