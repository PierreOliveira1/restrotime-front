import { useForm } from 'react-hook-form';
import { InputForm } from './components/ui/Input';
import { Button } from './components/ui/Button';
import { useParams } from 'react-router-dom';
import InputMask from 'react-input-mask';

import * as Styles from './styles';
import { Restaurant as RestaurantType } from '../Restaurants/dto/restaurant';

function Restaurant() {
	const { register, handleSubmit, setValue } = useForm<RestaurantType>();

	const { id } = useParams();

	const onSubmit = async (data: RestaurantType) => {
		console.log(data);
		alert('teste');
	};

	const requiredInput = {
		required: 'É obrigatório o preenchimento desse campo!',
	};

	const options = [
		{
			label: 'Lanchonete',
			value: 'snack_bar',
		},
		{
			label: 'Fast Food',
			value: 'fast_food',
		},
		{
			label: 'Pizzaria',
			value: 'pizzeria',
		},
		{
			label: 'Japonês',
			value: 'japanese',
		},
		{
			label: 'Italiano',
			value: 'italian',
		},
		{
			label: 'Vegetariano',
			value: 'vegetarian',
		},
	];

	function formatCNPJ(cnpj: string) {
		cnpj = cnpj.replace(/\D/g, '');
		cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
		cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
		cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
		cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');

		return cnpj;
	}

	return (
		<>
			<Styles.Container>
				<Styles.TitleContent>
					<Styles.Title>
						{id !== 'novo'
							? 'Editar Restaurante'
							: 'Adicionar novo restaurante'}
					</Styles.Title>
				</Styles.TitleContent>

				<Styles.Form onSubmit={handleSubmit(onSubmit)}>
					<InputForm
						label="Nome"
						placeholder="Digite o nome fantasia do restaurante..."
						{...register('fantasyName', requiredInput)}
					/>

					<InputForm
						label="Razão Social"
						placeholder="Digite a razão social..."
						{...register('corporateName', requiredInput)}
					/>

					<InputForm
						label="CNPJ"
						placeholder="Digite o CNPJ..."
						{...register('cnpj', {
							required: 'É obrigatório o preenchimento desse campo!',
							pattern: {
								value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
								message: 'É obrigatório o preenchimento desse campo!',
							},
							onChange: (e) => setValue('cnpj', formatCNPJ(e.target.value)),
						})}
					/>

					<InputForm
						label="Email"
						placeholder="Digite o email..."
						{...register('email', requiredInput)}
					/>

					<Styles.Wrapper>
						<InputForm
							label="Telefone"
							placeholder="Digite o nome fantasia do restaurante..."
							{...register('phoneNumber', requiredInput)}
						/>

						<Styles.Wrapper style={{ flexDirection: 'column', gap: '5px' }}>
							<label>Tipo</label>
							<Styles.Select name="select">
								{options.map((option) => (
									<Styles.Option
										key={option.value}
										value={option.value}
										{...register('type', requiredInput)}
									>
										{option.label}
									</Styles.Option>
								))}
							</Styles.Select>
						</Styles.Wrapper>
					</Styles.Wrapper>

					<Button />
				</Styles.Form>
			</Styles.Container>
		</>
	);
}

export default Restaurant;
