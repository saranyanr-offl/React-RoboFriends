import Card from './Card';

const CardList = ({ robots }) => {
	// throw new Error('Noo');
	return (
		<div>
		{
			robots.map(user => {
				return (
					<Card 
					robot={user} 
					key={user.id} 
					/> 
					);
			})
		}
		</div>
		);
};

export default CardList;