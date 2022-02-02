import './StatCard.scss'

const StatCard = (props) => {
  return (

    <div className="cardtemplate">
      <i
        className={`${props.icon}`}
        aria-hidden="true"
      ></i>
      <div className="card_inner">
        <p className="text-primary-p">{props.title}</p>
        <span className="font-bold">{props.value}</span>
      </div>
    </div>

  );
};

export default StatCard;
