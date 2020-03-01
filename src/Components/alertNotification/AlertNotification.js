import React from "react";

const css = {
    notificationBox: {
    position: "absolute",
    top: "20px",
    right: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(253, 75, 75, 0.8)",
    borderRadius: "6px",
  },
  
  notificationMessage: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "20px",
    fontWeight: 400,
    color: "#ffffff",
    padding: "20px 30px"
  }
}

const Alert = ({ name }) => (
  <div style={css.notificationBox} >
    <h3 style={css.notificationMessage}>
      {`${name} already exists!`}
    </h3>
  </div>
);

export default Alert;
