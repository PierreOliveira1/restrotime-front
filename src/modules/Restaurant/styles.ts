import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;

export const TitleContent = styled.div<{
	primary?: boolean;
}>`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: ${({ primary }) => (primary ? 'center' : 'flex-start')};
	margin-top: 50px;
	margin-bottom: 20px;
`;

export const Title = styled.h2<{
	primary?: boolean;
}>`
	font-size: ${({ primary }) => (primary ? '2rem' : '1.5rem')};
	font-weight: 700;
	color: #00bfa5;
	padding: ${({ primary }) => (primary ? '0 20px' : '0')};

	@media (max-width: 500px) {
		font-size: 1.4rem;
	}
`;

export const Form = styled.form`
	width: 90%;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	padding: 1rem;
	border: 1px solid hsl(0, 0%, 46%);
	border-radius: 5px;
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 10px;

	& > label {
		font-weight: bold;
	}
`;

export const Select = styled.select`
	width: 100%;
	height: 35px;
	border-radius: 5px;
	padding: 5px;
	outline: 0;
`;

export const Option = styled.option`
	&:select {
		color: rgb(0, 191, 165);
	}
`;

export const ContainerSchedules = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-row-gap: 1rem;
	padding-top: 20px;
	padding-bottom: 50px;
	overflow: auto;
	justify-items: center;

	@media (max-width: 1300px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 1090px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 830px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 660px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(10, 1fr);
	}
`;

export const ContentError = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const LabelError = styled.label`
	color: red;
	font-size: 0.8rem;
	font-weight: 600;
`;
