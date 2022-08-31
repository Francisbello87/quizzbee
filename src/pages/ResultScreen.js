import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ResultScreen = () => {
  const { score, amount_of_question } = useSelector((state) => state);

  return (
    <Box mt={0}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Final Score: {score} / {amount_of_question}
      </Typography>
    </Box>
  );
};

export default ResultScreen;
