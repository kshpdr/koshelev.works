import { styled } from "solid-styled-components"
import CloseIcon from "../Icons/CloseIcon"

export const ClosedIcon = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Layout = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justifyContent: center;
  alignItems: center;
`;

export const Container = styled("div")`
  background: white;
  width: 50%;
  padding: 2rem;
  borderRadius: 5px;
  position: relative;
`;
