import { useNavigate } from "react-router-dom";
import StyledDiv from "../StyledDiv/StyledDiv";
import styles from "./StyledSidebar.module.scss";
import urlProfileIcon from "./initialIcons/profileExampleIcon.svg";
import urlLogotypeIcon from "./initialIcons/brandExampleIcon.svg";

export interface StyledSidebarProps {
  className?: string;
  logotype?: string;
  profileIcon?: string;
  children?: React.ReactNode;
}

const StyledSidebar = ({
  logotype = urlLogotypeIcon,
  profileIcon = urlProfileIcon,
  className = "",
  children,
}: StyledSidebarProps) => {
  const navigate = useNavigate();

  return (
    <>
      <StyledDiv className={`${className} ${styles.sidebar}`}>
        <StyledDiv
          onClick={() => navigate("/")}
          className={styles.sidebarHeader}
        >
          <img src={logotype} alt="brand icon" />
        </StyledDiv>
        <StyledDiv>{children}</StyledDiv>
        <StyledDiv
          className={styles.sidebarFooter}
          onClick={() => navigate("/profile")}
        >
          <img src={profileIcon} alt="profile icon" />
        </StyledDiv>
      </StyledDiv>
    </>
  );
};

export default StyledSidebar;
