import styles from "./StyledDiv.module.scss";
import classNames from "classnames";

interface StyledDivProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const StyledDiv = ({ children, className, onClick }: StyledDivProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.bodyContent, className)}
    >
      {children}
    </div>
  );
};

export default StyledDiv;
