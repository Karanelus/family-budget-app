import { useAppContextContainer } from "../../context/AppContext";
import CalendarIcon from "../../svg/CalendarIcon";
import styles from "./Calculator.styles";

const CalculationDateButton = () => {
  const { isDarkmode, setIsDateChanging } = useAppContextContainer();

  const onClickDateChange = () => {
    setIsDateChanging(true);
  };

  return (
    <button
      title="Choose other date"
      onClick={onClickDateChange}
      className={styles.buttonDate}
    >
      <CalendarIcon fill={isDarkmode ? "#999999" : "black"} />
    </button>
  );
};

export default CalculationDateButton;
