import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/system";

const CustomBox = ({
  children,
  needBackground = false,
  needShadow = false,
  needRadius = false,
  styles = {},
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: needBackground ? theme.palette.primary.main : "",
        boxShadow: needShadow ? theme.shadows[4] : 0,
        borderRadius: needRadius ? 1 : 0,
        ...styles,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomBox;