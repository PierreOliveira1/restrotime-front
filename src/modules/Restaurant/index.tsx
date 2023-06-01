/* eslint-disable indent */
import { useForm } from 'react-hook-form';
import { InputForm } from './components/ui/Input';
import { Button } from './components/ui/Button';
import { useNavigate, useParams } from 'react-router-dom';

import * as Styles from './styles';
import { Restaurant as RestaurantType } from '@/dto/restaurant';
import {
	formatCEP,
	formatCNPJ,
	formatPhoneNumber,
	onlyNumbers,
} from './utils/masks';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ApiError, fetchApi } from '@/lib/fetchApi';
import toast, { Toaster } from 'react-hot-toast';
import { ChangeEvent, useEffect } from 'react';
import { Loading } from '@/components/common/Loading';
import { CardDay } from './components/common/CardDay';
import { Schedule } from './dto/schedules';

interface CEPInfo {
	cep: string;
	state: string;
	city: string;
	neightborhood: string;
	street: string;
}

function Restaurant() {
	const {
		register,
		handleSubmit,
		setValue,
		setFocus,
		unregister,
		formState: { errors },
	} = useForm<RestaurantType>();

	const { id } = useParams();
	const queryClient = useQueryClient();
	const navigate = useNavigate();
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

	const restaurant =
		id !== 'novo'
			? useQuery<RestaurantType>(
					`/restaurants/${id}`,
					async () => {
						const response = await fetchApi(`/restaurants/${id}`);
						const data = await response.json();

						return data;
					},
					{
						onError: (error) => {
							console.log(error);
							if (error instanceof ApiError) {
								if (id !== 'novo') {
									if (error?.errors.issues) {
										for (const issue of error.errors.issues) {
											toast.error(issue.message);
										}
									} else {
										return toast.error(error.message);
									}
								} else {
									return toast.error('Erro ao buscar dados do restaurante!');
								}
							}
						},
					},
			  )
			: null;

	async function handleRestaurant(
		data: RestaurantType,
	): Promise<RestaurantType> {
		const response = await fetchApi(
			`/restaurants${id !== 'novo' ? `/${id}` : ''}`,
			{
				method: id !== 'novo' ? 'PATCH' : 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					fantasyName: data.fantasyName,
					corporateName: data.corporateName,
					cnpj: onlyNumbers(data.cnpj),
					email: data.email,
					phoneNumber: onlyNumbers(data.phoneNumber),
					type: data.type.toUpperCase(),
					address: {
						street: data.address.street,
						complement: data.address.complement,
						number: data.address.number,
						district: data.address.district,
						city: data.address.city,
						state: data.address.state,
						zipCode: onlyNumbers(data.address.zipCode),
					},
				}),
			},
		);

		return response.json();
	}

	const mutationRestaurante = useMutation(handleRestaurant);

	async function handleSchedules(data: RestaurantType): Promise<Schedule[]> {
		const schedules = data.schedules.map((schedule) => {
			if (schedule.openingTime !== '' && schedule.openingTime !== null) {
				if (schedule.openingTime2 !== '' && schedule.openingTime2 !== null) {
					return {
						...schedule,
						openingTime: schedule.openingTime,
						closingTime: schedule.closingTime,
						openingTime2: schedule.openingTime2,
						closingTime2: schedule.closingTime2,
						dayOfWeek: schedule.dayOfWeek,
					};
				}

				return {
					...schedule,
					openingTime: schedule.openingTime,
					closingTime: schedule.closingTime,
					openingTime2: null,
					closingTime2: null,
					dayOfWeek: schedule.dayOfWeek,
				};
			}

			return {
				...schedule,
				openingTime: null,
				closingTime: null,
				openingTime2: null,
				closingTime2: null,
			};
		});

		const response = await fetchApi(`/restaurants/${id}/schedules`, {
			method: !data.schedules.length ? 'PATCH' : 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(
				!schedules.length
					? schedules
							.sort((a, b) => {
								if (a.dayOfWeek > b.dayOfWeek) {
									return 1;
								}
								if (a.dayOfWeek < b.dayOfWeek) {
									return -1;
								}
								return 0;
							})
							.map((schedule, index) => ({
								...schedule,
								id: schedules.sort((a, b) => {
									if (a.dayOfWeek > b.dayOfWeek) {
										return 1;
									}
									if (a.dayOfWeek < b.dayOfWeek) {
										return -1;
									}
									return 0;
								})[index].id,
								restaurantId: id,
							}))
					: {
							schedules: schedules,
					  },
			),
		});

		return response.json();
	}

	const mutationSchedules = useMutation(handleSchedules);

	useEffect(() => {
		if (restaurant?.isSuccess) {
			const data = restaurant?.data;
			setValue('fantasyName', data?.fantasyName);
			setValue('corporateName', data?.corporateName);
			setValue('cnpj', formatCNPJ(data?.cnpj));
			setValue('email', data?.email);
			setValue('phoneNumber', formatPhoneNumber(data?.phoneNumber));
			setValue('type', data?.type);
			setValue('address', data?.address);

			Array.from({ length: 7 }).forEach((_, index) => {
				setValue(
					`schedules.${index}.openingTime`,
					data?.schedules[index]?.openingTime,
				);
				setValue(
					`schedules.${index}.closingTime`,
					data?.schedules[index]?.closingTime,
				);
				setValue(
					`schedules.${index}.openingTime2`,
					data?.schedules[index]?.openingTime2,
				);
				setValue(
					`schedules.${index}.closingTime2`,
					data?.schedules[index]?.closingTime2,
				);
			});
		}
	}, [restaurant?.data, restaurant?.isSuccess, setValue]);

	const onSubmit = async (data: RestaurantType) => {
		console.log('data', data);
		mutationRestaurante.mutate(data, {
			onSuccess: (data) => {
				queryClient.invalidateQueries(`/restaurants/${data.id}`);
				queryClient.invalidateQueries('/restaurants');
				mutationSchedules.mutate(data, {
					onSuccess: () => {
						toast.success(
							`Horários ${
								id !== 'novo' ? 'atualizado' : 'cadastrado'
							} com sucesso!`,
						);
						if (id === 'novo') navigate(`/restaurante/${data.id}`);
					},
					onError: (error) => {
						if (error instanceof ApiError) {
							if (error?.errors.issues) {
								console.log(error.errors.issues);
								for (const issue of error.errors.issues) {
									toast.error(issue.message);
								}
							} else {
								toast.error(error.message);
								if (id === 'novo') navigate(`/restaurante/${data.id}`);
								return;
							}

							if (id === 'novo') navigate(`/restaurante/${data.id}`);
							return;
						}
					},
				});

				toast.success(
					`Restaurante ${
						id !== 'novo' ? 'atualizado' : 'cadastrado'
					} com sucesso!`,
				);
			},
			onError: (error) => {
				if (error instanceof ApiError) {
					if (error?.errors.issues) {
						for (const issue of error.errors.issues) {
							toast.error(issue.message);
						}
					} else {
						toast.error(error.message);
						return;
					}
				}
			},
		});
	};

	const requiredInput = {
		required: 'É obrigatório o preenchimento desse campo!',
	};

	if (restaurant?.isLoading) return <Loading />;

	async function getInfoCEP(cep: string) {
		const infos = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
		const data: CEPInfo = await infos.json();

		setValue('address.state', data.state);
		setValue('address.city', data.city);
		setValue('address.district', data.neightborhood);
		setValue('address.street', data.street);
		setFocus('address.number');
	}

	const data = restaurant?.data;

	return (
		<>
			<Toaster />
			<Styles.Container>
				<Styles.TitleContent primary>
					<Styles.Title primary>
						{id !== 'novo'
							? `Editar restaurante ${data?.fantasyName}`
							: 'Adicionar novo restaurante'}
					</Styles.Title>
				</Styles.TitleContent>

				<Styles.Form onSubmit={handleSubmit(onSubmit)}>
					<Styles.ContentError>
						<InputForm
							label="Nome"
							maxLength={60}
							placeholder="Digite o nome fantasia do restaurante..."
							{...register('fantasyName', requiredInput)}
						/>
						{errors.fantasyName && (
							<Styles.LabelError>
								{errors.fantasyName.message}
							</Styles.LabelError>
						)}
					</Styles.ContentError>
					<Styles.ContentError>
						<InputForm
							label="Razão Social"
							maxLength={60}
							placeholder="Digite a razão social..."
							{...register('corporateName', requiredInput)}
						/>
						{errors.corporateName && (
							<Styles.LabelError>
								{errors.corporateName.message}
							</Styles.LabelError>
						)}
					</Styles.ContentError>

					<Styles.ContentError>
						<InputForm
							label="CNPJ"
							maxLength={18}
							placeholder="Digite o CNPJ..."
							{...register('cnpj', {
								required: 'É obrigatório o preenchimento desse campo!',
								onChange: (e: ChangeEvent<HTMLInputElement>) => {
									e.target.value = formatCNPJ(e.target.value);
								},
							})}
						/>
						{errors.cnpj && (
							<Styles.LabelError>{errors.cnpj.message}</Styles.LabelError>
						)}
					</Styles.ContentError>

					<Styles.ContentError>
						<InputForm
							label="Email"
							type="email"
							maxLength={60}
							placeholder="Digite o email..."
							{...register('email', requiredInput)}
						/>
						{errors.email && (
							<Styles.LabelError>{errors.email.message}</Styles.LabelError>
						)}
					</Styles.ContentError>

					<Styles.Wrapper>
						<Styles.ContentError>
							<InputForm
								label="Telefone"
								maxLength={15}
								placeholder="Digite o nome fantasia do restaurante..."
								{...register('phoneNumber', {
									required: 'É obrigatório o preenchimento desse campo!',
								})}
								onKeyUp={(e) => {
									if (e.key !== 'Backspace' && e.key !== 'Delete')
										e.currentTarget.value = formatPhoneNumber(
											e.currentTarget.value,
										);
								}}
							/>
							{errors.phoneNumber && (
								<Styles.LabelError>
									{errors.phoneNumber.message}
								</Styles.LabelError>
							)}
						</Styles.ContentError>

						<Styles.Wrapper style={{ flexDirection: 'column', gap: '5px' }}>
							<label>Tipo</label>
							<Styles.ContentError>
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
								{errors.type && (
									<Styles.LabelError>{errors.type.message}</Styles.LabelError>
								)}
							</Styles.ContentError>
						</Styles.Wrapper>
					</Styles.Wrapper>

					<Styles.Wrapper>
						<Styles.ContentError>
							<InputForm
								label="CEP"
								maxLength={9}
								placeholder="Digite o CEP..."
								{...register('address.zipCode', {
									required: 'É obrigatório o preenchimento desse campo!',
									onChange: (e: ChangeEvent<HTMLInputElement>) => {
										e.target.value = formatCEP(e.target.value);

										if (onlyNumbers(e.target.value).length === 8)
											getInfoCEP(e.target.value);
									},
								})}
							/>
							{errors.address?.zipCode && (
								<Styles.LabelError>
									{errors.address?.zipCode.message}
								</Styles.LabelError>
							)}
						</Styles.ContentError>

						<Styles.ContentError>
							<InputForm
								label="Número"
								maxLength={5}
								placeholder="Digite o número..."
								{...register('address.number', requiredInput)}
							/>
							{errors.address?.number && (
								<Styles.LabelError>
									{errors.address?.number.message}
								</Styles.LabelError>
							)}
						</Styles.ContentError>
					</Styles.Wrapper>

					<Styles.ContentError>
						<InputForm
							label="Rua"
							maxLength={100}
							placeholder="Digite a rua..."
							{...register('address.street', requiredInput)}
						/>
						{errors.address?.street && (
							<Styles.LabelError>
								{errors.address?.street.message}
							</Styles.LabelError>
						)}
					</Styles.ContentError>

					<Styles.Wrapper>
						<Styles.ContentError>
							<InputForm
								label="Cidade"
								maxLength={100}
								placeholder="Digite a cidade..."
								{...register('address.city', requiredInput)}
							/>
							{errors.address?.city && (
								<Styles.LabelError>
									{errors.address?.city.message}
								</Styles.LabelError>
							)}
						</Styles.ContentError>

						<Styles.ContentError>
							<InputForm
								label="Estado"
								maxLength={2}
								placeholder="Digite o estado..."
								{...register('address.state', requiredInput)}
							/>
							{errors.address?.state && (
								<Styles.LabelError>
									{errors.address?.state.message}
								</Styles.LabelError>
							)}
						</Styles.ContentError>
					</Styles.Wrapper>

					<Styles.Wrapper>
						<Styles.ContentError>
							<InputForm
								label="Bairro"
								maxLength={100}
								placeholder="Digite o bairro..."
								{...register('address.district', requiredInput)}
							/>
							{errors.address?.district && (
								<Styles.LabelError>
									{errors.address?.district.message}
								</Styles.LabelError>
							)}
						</Styles.ContentError>

						<Styles.ContentError>
							<InputForm
								label="Complemento"
								maxLength={100}
								placeholder="Digite o complemento..."
								{...register('address.complement')}
							/>
							{errors.address?.complement && (
								<Styles.LabelError>
									{errors.address?.complement.message}
								</Styles.LabelError>
							)}
						</Styles.ContentError>
					</Styles.Wrapper>

					<Styles.TitleContent primary>
						<Styles.Title>Horários</Styles.Title>
					</Styles.TitleContent>
					<Styles.ContainerSchedules>
						{Array.from({ length: 7 }).map((_, index) => (
							<CardDay
								key={index}
								index={index}
								register={register}
								unregister={unregister}
								errors={errors}
								schedules={data?.schedules ?? []}
							/>
						))}
					</Styles.ContainerSchedules>
					<Button type="submit" width="30%">
						{' '}
						{id !== 'novo' ? 'Atualizar' : 'Adicionar'}{' '}
					</Button>
				</Styles.Form>
			</Styles.Container>
		</>
	);
}

export default Restaurant;
