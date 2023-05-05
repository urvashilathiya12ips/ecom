import { Snackbar } from "@mui/material";
import React from "react";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function SnackBar({ open, transition, handleClose, type,msg }) {
  return (
    <>
      <Snackbar
        open={open}
        TransitionComponent={transition}
        autoHideDuration={3000}
        key={transition ? transition.name : ""}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
         {msg}
        </Alert>
      </Snackbar>
    </>
  );
}
