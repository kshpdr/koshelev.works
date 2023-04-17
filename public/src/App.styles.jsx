import { styled } from "solid-styled-components";

export const Header = styled("div")`
  font-family: "Didact Gothic";
  font-size: 64px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; // Added padding on the left and right
`;

export const Text = styled("div")`
  font-family: 'Didact Gothic';
  font-size: 20px;
  max-width: 400px;
  text-align: center;
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
