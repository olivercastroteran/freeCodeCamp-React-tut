const Card = ({ imgSrc, raiting, amount, country, txt, price }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="img" />
      <div className="card-text">
        <p>
          <span>⭐</span>
          <span className="grey">{raiting}</span>
          <span className="grey">
            ({amount}) - {country}
          </span>
        </p>
        <p className="card-txt">{txt}</p>
        <p className="price">
          <strong>From ${price}</strong> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
