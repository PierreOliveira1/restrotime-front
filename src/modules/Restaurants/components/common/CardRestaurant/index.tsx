import * as Styles from './styles';
import { BiTrash } from 'react-icons/bi';
import { MdModeEdit } from 'react-icons/md';
import { Restaurant } from '@/dto/restaurant';
import { memo, useState } from 'react';
import { ModalDelete } from '../ModalDelete';
import { useNavigate } from 'react-router-dom';

interface CardProps {
	restaurant: Restaurant;
}

function CardRestaurantComponent({ restaurant }: CardProps) {
	const navigate = useNavigate();
	const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

	return (
		<>
			<Styles.Content>
				<div>
					<div>
						<h3>{restaurant.fantasyName}</h3>
						<p>{restaurant.corporateName}</p>
					</div>
					<p>{restaurant.type}</p>
				</div>
				<div>
					<Styles.Button
						onClick={(e) => {
							e.stopPropagation();
							navigate(`/restaurante/${restaurant.id}`);
						}}
					>
						<MdModeEdit size={25} style={{ color: 'hsl(0 0% 46%)' }} />
					</Styles.Button>
					<Styles.Button
						onClick={(e) => {
							e.stopPropagation();
							setIsModalDeleteOpen(!isModalDeleteOpen);
						}}
					>
						<BiTrash size={25} style={{ color: 'hsl(0 0% 46%)' }} />
					</Styles.Button>
				</div>
			</Styles.Content>
			{isModalDeleteOpen && (
				<ModalDelete restaurant={restaurant} setClose={setIsModalDeleteOpen} />
			)}
		</>
	);
}

const CardRestaurant = memo(CardRestaurantComponent);

export { CardRestaurant };
