import { useEffect, useState } from 'react';
import * as Styles from './styles';
import {
	FieldErrors,
	UseFormRegister,
	UseFormUnregister,
} from 'react-hook-form';
import { Button } from '../../ui/Button';
import * as StylesGlobal from '../../../styles';
import { Restaurant } from '@/dto/restaurant';

interface Props {
	index: number;
	register: UseFormRegister<Restaurant>;
	unregister: UseFormUnregister<Restaurant>;
	errors: FieldErrors<Restaurant>;
	schedules: Restaurant['schedules'];
}

function CardDay({ index, register, unregister, errors, schedules }: Props) {
	const [isNewPeriod, setIsNewPeriod] = useState(true);
	const [isClosed, setIsClosed] = useState(false);
	const days = [
		'Domingo',
		'Segunda',
		'Terça',
		'Quarta',
		'Quinta',
		'Sexta',
		'Sábado',
	];

	useEffect(() => {
		if (schedules[index]?.openingTime2 === null || !schedules.length) {
			setIsNewPeriod(false);
		}
	}, [schedules]);

	useEffect(() => {
		if (!isNewPeriod) {
			unregister(`schedules.${index}.openingTime2`);
			unregister(`schedules.${index}.closingTime2`);
		}

		if (isClosed) {
			unregister(`schedules.${index}.openingTime2`);
			unregister(`schedules.${index}.closingTime2`);
		}
	}, [isNewPeriod, isClosed]);

	return (
		<Styles.Content>
			<Styles.Day>{days[index]}</Styles.Day>
			{!isClosed && (
				<>
					<Styles.Caption>Período 1</Styles.Caption>
					<Styles.ContentDateLabel>
						<Styles.DateLabel>Abertura</Styles.DateLabel>
						<StylesGlobal.ContentError>
							<Styles.InputDate
								type="time"
								step={1}
								{...register(`schedules.${index}.openingTime`, {
									required: 'Campo obrigatório',
								})}
							/>
							{errors?.schedules?.[index]?.openingTime && (
								<StylesGlobal.LabelError>
									{errors?.schedules?.[index]?.openingTime?.message}
								</StylesGlobal.LabelError>
							)}
						</StylesGlobal.ContentError>
					</Styles.ContentDateLabel>
					<Styles.ContentDateLabel>
						<Styles.DateLabel>Fechamento</Styles.DateLabel>
						<StylesGlobal.ContentError>
							<Styles.InputDate
								type="time"
								step={1}
								{...register(`schedules.${index}.closingTime`, {
									required: 'Campo obrigatório',
								})}
							/>
							{errors?.schedules?.[index]?.closingTime && (
								<StylesGlobal.LabelError>
									{errors?.schedules[index]?.closingTime?.message}
								</StylesGlobal.LabelError>
							)}
						</StylesGlobal.ContentError>
					</Styles.ContentDateLabel>
					{isNewPeriod && (
						<>
							<Styles.Caption>Período 2</Styles.Caption>
							<Styles.ContentDateLabel>
								<Styles.DateLabel>Abertura</Styles.DateLabel>
								<StylesGlobal.ContentError>
									<Styles.InputDate
										type="time"
										step={1}
										{...register(`schedules.${index}.openingTime2`, {
											required: 'Campo obrigatório',
										})}
									/>
									{errors?.schedules?.[index]?.openingTime2 && (
										<StylesGlobal.LabelError>
											{errors?.schedules?.[index]?.openingTime2?.message}
										</StylesGlobal.LabelError>
									)}
								</StylesGlobal.ContentError>
							</Styles.ContentDateLabel>
							<Styles.ContentDateLabel>
								<Styles.DateLabel>Fechamento</Styles.DateLabel>
								<StylesGlobal.ContentError>
									<Styles.InputDate
										type="time"
										step={1}
										{...register(`schedules.${index}.closingTime2`, {
											required: 'Campo obrigatório',
										})}
									/>
									{errors?.schedules?.[index]?.closingTime2 && (
										<StylesGlobal.LabelError>
											{errors?.schedules?.[index]?.closingTime2?.message}
										</StylesGlobal.LabelError>
									)}
								</StylesGlobal.ContentError>
							</Styles.ContentDateLabel>
						</>
					)}
					<Button
						type="button"
						width="100%"
						marginTop="10px"
						onClick={() => setIsNewPeriod(!isNewPeriod)}
					>
						{isNewPeriod ? 'Remover período' : 'Adicionar período'}
					</Button>
				</>
			)}
			<Styles.Closed
				type="button"
				onClick={() => {
					setIsClosed(!isClosed);
				}}
			>
				{!isClosed ? 'Fechado' : 'Aberto'}
			</Styles.Closed>
		</Styles.Content>
	);
}

export { CardDay };
