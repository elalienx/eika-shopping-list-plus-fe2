// NPM packages
import { createPortal } from "react-dom";

export default function Modal({ modalState }) {
  const [modal, setModal] = modalState;

  // createPortal()
  // 1. children: the JSX tags
  // 2. element: where to put it

  // Safegurard
  if (modal === null) return null;

  return createPortal(
    <div className="modal">
      <div className="background">{/* empty on purpose */}</div>
      <div className="window">{modal}</div>
    </div>,
    document.getElementById("portal")
  );
}
