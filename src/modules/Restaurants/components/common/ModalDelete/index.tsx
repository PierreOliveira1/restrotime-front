import { Restaurant } from '@/modules/Restaurants/dto/restaurant';
import FocusTrap from 'focus-trap-react';
import * as Styles from './styles';
import { useMutation, useQueryClient } from 'react-query';
import { fetchApi } from '@/lib/fetchApi';
import toast from 'react-hot-toast';

interface ModalProps {
	restaurant: Restaurant;
	setClose: (value: boolean) => void;
}

function ModalDelete({ restaurant, setClose }: ModalProps) {
	const queryClient = useQueryClient();
	const deleteRestaurant = useMutation(
		async (id: string) => {
			return await fetchApi(`/restaurants/${id}`, {
				method: 'DELETE',
			});
		},
		{
			onSuccess: () => {
				toast.success('Restaurante excluído com sucesso');
				queryClient.invalidateQueries('restaurants');
				setClose(false);
			},
			onError: () => {
				toast.error('Erro ao excluir restaurante');
			},
		},
	);

	function handleDeleteRestaurant() {
		deleteRestaurant.mutate(restaurant.id);
	}

	return (
		<Styles.Container>
			<FocusTrap>
				<Styles.Content
					id="my-modal"
					role="dialog"
					aria-labelledby="modal-title"
					aria-modal="true"
				>
					<h1 id="modal-title">
						Realmente deseja excluir {restaurant.fantasyName}?
					</h1>
					<Styles.ContentButtons>
						<Styles.ButtonConfirm onClick={handleDeleteRestaurant}>
							Sim
						</Styles.ButtonConfirm>
						<Styles.ButtonCancel
							onClick={() => {
								setClose(false);
							}}
						>
							Não
						</Styles.ButtonCancel>
					</Styles.ContentButtons>
				</Styles.Content>
			</FocusTrap>
		</Styles.Container>
	);
}

export { ModalDelete };
