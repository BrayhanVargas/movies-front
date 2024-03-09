import { Box } from "@mui/material";

/* eslint-disable react/prop-types */
const ListCards = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "10px",
        overflowX: "scroll",
      }}
    >
      {props.children}
    </Box>
  );
};

export default ListCards;
