import "../styles/Spinner.css";

const Spinner = ({ isSmall = false }) => <div className={`${isSmall ? "small-spinner" : "spinner"}`}/>

export default Spinner;
