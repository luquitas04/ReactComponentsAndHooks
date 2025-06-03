import { Switch } from "@headlessui/react";
import styles from "./Switch.module.scss";
import clsx from "clsx";

// npm install @headlessui/react
// npm install classNames

interface ISwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  text1: string;
  text2: string;
}

const SwitchComponent: React.FC<ISwitchProps> = ({
  checked,
  onChange,
  text1,
  text2,
}) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={clsx(styles.switch, {
        [styles.switch__enabled]: checked,
        [styles.switch__disabled]: !checked,
      })}
    >
      <span className={styles.switch__slider}>
        {checked ? `${text1}` : `${text2}`}
      </span>
    </Switch>
  );
};

export default SwitchComponent;
