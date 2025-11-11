import { MdClose } from "react-icons/md";
import Title from "./Title";
import { createPortal } from "react-dom";

function Modal({ children, closeModal }) {
  return createPortal (
    <div class="absolute top-0 left-0 w-full h-screen flex flex-col items-center bg-[#00000059] backdrop-blur-xs">
      <div class="w-[90%] relative m-auto rounded-lg bg-gray-50">
        <div class='absolute top-5 right-5' onClick={closeModal}>
            <MdClose size="1.3rem" color="#636262" />
        </div>
        {children}
      </div>
    </div>, document.body
  );
}

export default Modal;
