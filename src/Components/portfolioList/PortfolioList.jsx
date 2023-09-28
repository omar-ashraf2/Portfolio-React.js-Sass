import "./portfolioList.scss";

const PortfolioList = ({ id, title, setSelected, active }) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => {
        setSelected(id);
      }}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
