import { ModalBody, ModalHeader } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ReactComponent as XCircleIcon } from "../images/x-circle.svg";
import "../styles/Homepage.css";

function ModalPop(props) {
  return (
    <Modal
      className="corp-modal notice-request-modal"
      show
      centered
      size={props.size}
      scrollable
    >
      <ModalHeader style={{ background: "white", textAlign: "center" }}>
        <button
          className="corp-modal-x mt-3"
          onClick={() => props.onClose(false)}
        >
          <XCircleIcon />
        </button>
      </ModalHeader>
      <ModalBody>
        <div className="container send-status-modal text-start">
          {props.children}
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ModalPop;
