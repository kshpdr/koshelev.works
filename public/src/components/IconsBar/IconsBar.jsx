import { Bar, Icon, Telegram, Github, Linkedin, Cv, Blog } from "./IconsBar.styles"

const IconsBar = () => {
    return (
    <Bar>
        <Icon onClick={() => window.open('https://t.me/kshpdr')}>
          <Telegram />
        </Icon>
        <Icon onClick={() => window.open('https://github.com/kshpdr')}>
          <Github />
        </Icon>
        <Icon onClick={() => window.open('https://www.linkedin.com/in/denis-koshelev-8a28a0153/')}>
          <Linkedin />
        </Icon>
        <Icon onClick={() => window.open('/cv-work-2024.pdf')}>
          <Cv />
        </Icon>
        <Icon onClick={() => window.open('https://teletype.in/@koshelev')}>
          <Blog />
        </Icon>
      </Bar>
    )
};

export default IconsBar;