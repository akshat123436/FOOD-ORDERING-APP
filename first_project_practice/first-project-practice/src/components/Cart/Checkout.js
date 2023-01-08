import styles from "./Checkout.module.css";
import { useRef, useReducer } from "react";

const setValidity = (state, action) => {
  if (action.type === "NAMEVALID") {
    return {
      ...state,
      name: true,
    };
  }
  if (action.type === "NAMEINVALID") {
    return {
      ...state,
      name: false,
    };
  }
  if (action.type === "STREETVALID") {
    return {
      ...state,
      street: true,
    };
  }
  if (action.type === "STREETINVALID") {
    return {
      ...state,
      street: false,
    };
  }
  if (action.type === "POSTALVALID") {
    return {
      ...state,
      postalCode: true,
    };
  }
  if (action.type === "POSTALINVALID") {
    return {
      ...state,
      postalCode: false,
    };
  }
  if (action.type === "ADDRESSVALID") {
    return {
      ...state,
      address: true,
    };
  }
  if (action.type === "ADDRESSINVALID") {
    return {
      ...state,
      address: false,
    };
  }
  return {
    name: false,
    street: false,
    postalCode: false,
    address: false,
  };
};

const Checkout = (props) => {
  const [validity, dispatchValidity] = useReducer(setValidity, {
    name: true,
    street: true,
    postalCode: true,
    address: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const addressInputRef = useRef();
  const checkoutSubmitHandler = (event) => {
    event.preventDefault();
    if (nameInputRef.current.value.trim() === "") {
      dispatchValidity({ type: "NAMEINVALID" });
      return;
    }
    if (streetInputRef.current.value.trim() === "") {
      dispatchValidity({ type: "STREETINVALID" });
      return;
    }
    if (
      postalCodeInputRef.current.value.trim() === "" ||
      postalCodeInputRef.current.value.trim().length < 5
    ) {
      dispatchValidity({ type: "POSTALINVALID" });
      return;
    }
    if (addressInputRef.current.value.trim() === "") {
      dispatchValidity({ type: "ADDRESSINVALID" });
      return;
    }

    props.onOrder({
      name: nameInputRef.current.value,
      street: streetInputRef.current.value,
      postalCode: postalCodeInputRef.current.value,
      address: addressInputRef.current.value,
    });
  };
  const nameBlurHandler = () => {
    if (nameInputRef.current.value.trim() === "") {
      dispatchValidity({ type: "NAMEINVALID" });
    } else {
      dispatchValidity({ type: "NAMEVALID" });
    }
  };
  const streetBlurHandler = () => {
    if (streetInputRef.current.value.trim() === "") {
      dispatchValidity({ type: "STREETINVALID" });
    } else {
      dispatchValidity({ type: "STREETVALID" });
    }
  };
  const postalBlurHandler = () => {
    if (
      postalCodeInputRef.current.value.trim() === "" ||
      postalCodeInputRef.current.value.trim().length < 5
    ) {
      dispatchValidity({ type: "POSTALINVALID" });
    } else {
      dispatchValidity({ type: "POSTALVALID" });
    }
  };
  const addressBlurHandler = () => {
    if (addressInputRef.current.value.trim() === "") {
      dispatchValidity({ type: "ADDRESSINVALID" });
    } else {
      dispatchValidity({ type: "ADDRESSVALID" });
    }
  };

  const nameClasses = `${styles.control} ${
    validity.name ? "" : styles.invalid
  }`;
  const streetClasses = `${styles.control} ${
    validity.street ? "" : styles.invalid
  }`;
  const postalCodeClasses = `${styles.control} ${
    validity.postalCode ? "" : styles.invalid
  }`;
  const addressClasses = `${styles.control} ${
    validity.address ? "" : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={checkoutSubmitHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">You Name : </label>
        <input
          onBlur={nameBlurHandler}
          type="text"
          id="name"
          ref={nameInputRef}
        />
        {!validity.name && <p>NAME IS INVALID can't be empty</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street : </label>
        <input
          onBlur={streetBlurHandler}
          type="text"
          id="street"
          ref={streetInputRef}
        />
        {!validity.street && <p>STREET IS INVALID can't be empty</p>}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor="postal-code">You postal-code : </label>
        <input
          onBlur={postalBlurHandler}
          type="text"
          id="postal-code"
          ref={postalCodeInputRef}
        />
        {!validity.postalCode && (
          <p>POSTAL CODE IS INVALID can't be empty and less than 5 digit</p>
        )}
      </div>
      <div className={addressClasses}>
        <label htmlFor="address">You address : </label>
        <input
          onBlur={addressBlurHandler}
          type="text"
          id="address"
          ref={addressInputRef}
        />
        {!validity.address && <p>ADDRESS IS INVALID can't be empty</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.setCheckOut}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
