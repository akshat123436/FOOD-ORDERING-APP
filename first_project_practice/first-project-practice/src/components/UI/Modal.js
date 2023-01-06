import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
// import { ReactDOM } from "react";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const overlayDiv = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        overlayDiv
      )}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, overlayDiv)}
      {/* <Overlay>{props.children}</Overlay> */}
      {/* {props.children} */}
    </Fragment>
  );
};

export default Modal;
