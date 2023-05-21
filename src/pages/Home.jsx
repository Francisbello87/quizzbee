import React from "react";
import OptionSelect from "../components/OptionSelect";
import { Box } from "@mui/system";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextFieldOption from "../components/TextFieldOption";
import useAxios from "../components/useAxios";

const Home = () => {
  const navigate = useNavigate();

  const { response, error, isLoading } = useAxios({ url: "api_category.php" });

  if (isLoading) {
    return (
      <Box mt={0}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography variant="h6" color="red">
        Something went wrong ☹
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("questions");
  };

  return (
    <div className="onboarding">
      <h1>Quizzy</h1>
      <form onSubmit={handleSubmit}>
        <OptionSelect options={response.trivia_categories} label="Categories" />
        <OptionSelect options={difficultyOptions} label="Difficulty" />
        <OptionSelect options={typeOptions} label="Type" />
        <TextFieldOption />
        <Box mt={3} width="100%">
          <Button
            fullWidth
            className="start-btn"
            variant="contained"
            type="submit"
          >
            Start Quiz
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Home;
