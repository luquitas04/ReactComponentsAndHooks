import styles from './StyledDiv.module.scss';
import classNames from 'classnames';

interface StyledDivProps {
  children: React.ReactNode;
  className?: string;
}

const StyledDiv = ({ children, className }: StyledDivProps) => {
  return <div className={classNames(styles.bodyContent, className)}>{children}</div>;
};

export default StyledDiv;