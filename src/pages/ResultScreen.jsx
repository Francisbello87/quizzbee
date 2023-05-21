import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { handleScoreChange, handleAmountChange } from "../components/actions";

const ResultScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score, amount_of_question } = useSelector((state) => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/");
  };

  return (
    <Box mt={0}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Final Score: {score} / {amount_of_question}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        Back to settings
      </Button>
    </Box>
  );
};

export default ResultScreen;
