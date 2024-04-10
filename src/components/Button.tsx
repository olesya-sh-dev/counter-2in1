import React from "react";
import Button from "@mui/material/Button";

type ButtonPropsType = {
  title: string;
  onClick: () => void;
  
};
export const ButtonComponent = ({ title, onClick }: ButtonPropsType) => {
  return <Button onClick={onClick} variant="contained" size="large">{title} </Button>;
};
