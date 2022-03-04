// NPM packages
import { createPortal } from "react-dom";

export default function Modal({ modalState }) {
  const [modal, setModal] = modalState;

  // Safegurard
  if (modal === null) return null;

  return createPortal(
    <div className="modal" role="dialog">
      <div className="background" onClick={() => setModal(null)}>
        {/* empty on purpose */}
      </div>
      <div className="content">{modal}</div>
    </div>,
    document.getElementById("portal")
  );
}
