import { styled } from "solid-styled-components";
import CvIcon from "../Icons/CvIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import TelegramIcon from "../Icons/TelegramIcon";
import GithubIcon from "../Icons/GithubIcon";
import BlogIcon from "../Icons/BlogIcon";

export const Bar = styled("div")`
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
`;

export const Icon = styled("div")`
  cursor: pointer;
`;

export const Cv = styled(CvIcon)`
`;

export const Linkedin = styled(LinkedinIcon)`
`;

export const Telegram = styled(TelegramIcon)`
`;

export const Github = styled(GithubIcon)`
`;

export const Blog = styled(BlogIcon)`
`;