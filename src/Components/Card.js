const Card = (props) => {
  return (
    <div>
      <div className="cards">
        <div>
          <img className="place-image" src={props.item.imageUrl} alt="" />
        </div>
        <div className="image-details">
          <div className="loc-and-url">
            <h3 className="country">
              <i class="fa fa-map-marker loc-logo"></i>
              {props.item.location.toUpperCase()}
            </h3>
            <p>
              <a className="googlemaps-url" href={props.item.googleMapsUrl}>
                View on Google Maps
              </a>
            </p>
          </div>
          <h1 className="card-title">{props.item.title}</h1>
          <h4 className="card-date">
            {props.item.startDate} - {props.item.endDate}
          </h4>
          <p>{props.item.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Card;
