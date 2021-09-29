
const Card = ({ robot }) =>  {
	const {username, name, email} = robot;
	return (
		<div className="tc bg-light-green dib pa3 ma2 br3 grow bw2 shadow-5">
		<div>
		<img src={`https://robohash.org/${username}?set=set4&size=200x200`} alt={`Pic of ${username}`} />
		<div>
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
		</div>
		</div>
		);
}

export default Card;