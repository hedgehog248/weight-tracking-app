import { Inter } from "next/font/google";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [message, setMessage] = useState<string>("");

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:5000/hi");
      const text = await response.text();
      setMessage(text);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Error fetching data");
    }
  }
  return (
    <>
      <Button variant="contained" onClick={handleClick}>Click me</Button>
      <Box>{message}</Box>
    </>
  );
}
