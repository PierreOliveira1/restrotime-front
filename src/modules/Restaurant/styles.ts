import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;

export const TitleContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 50px;
	margin-bottom: 20px;
`;

export const Title = styled.h2`
	font-size: 2.5rem;
	font-weight: 700;
	color: #00bfa5;
	padding: 0 20px;

	@media (max-width: 500px) {
		font-size: 1.4rem;
	}
`;

export const Form = styled.form`
	width: 75%;
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
