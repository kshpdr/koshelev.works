import { styled } from "solid-styled-components";
import Layout from "./components/Layout";

export const Header = styled("div")`
  font-family: "Didact Gothic";
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .mobile & {
    font-size: 40px;
    padding: 0 10px;
  }

  .desktop & {
    font-size: 64px;
    padding: 0 20px;
  }
`;

export const Text = styled("div")`
  font-family: 'Didact Gothic';
  max-width: 400px;
  text-align: center;

  .mobile & {
    font-size: 18px;
  }

  .desktop & {
    font-size: 20px;
  }
`;

export const LanguageSelect = styled("select")`
  font-family: "Didact Gothic";
  font-size: 20px;
  padding: 5px 10px;
  background-color: white;
  border: none; // Removed the border
  border-radius: 5px;
  cursor: pointer;
  appearance: none; // Remove default styling
  position: relative; // Added to center the dropdown vertically
  top: 50%; // Added to center the dropdown vertically
  transform: translateY(-50%); // Added to center the dropdown vertically
  outline: none; // Remove the outline
`;
