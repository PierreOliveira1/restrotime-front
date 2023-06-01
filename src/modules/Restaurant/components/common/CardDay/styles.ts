import styled from 'styled-components';

export const Content = styled.div`
	width: 220px;
	height: fit-content;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 5px hsl(0, 0%, 46%);
	border: 1px solid hsl(0, 0%, 46%);
	padding: 1rem;
`;

export const Day = styled.h3`
	font-size: 1.5rem;
	font-weight: 700;
	color: #00bfa5;

	@media (max-width: 500px) {
		font-size: 1rem;
	}
`;

export const Caption = styled.h4`
	font-size: 1rem;
	font-weight: 700;
	color: #000;
	margin-top: 10px;
`;

export const ContentDateLabel = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-top: 10px;
`;

export const DateLabel = styled.label`
	font-size: 1rem;
	font-weight: 700;
	color: #000;
`;

export const InputDate = styled.input`
	width: 100%;
	height: 35px;
	border-radius: 5px;
	border: 1px solid hsl(0, 0%, 46%);
	padding: 0 5px;
`;

export const Closed = styled.button`
	width: 100%;
	height: 35px;
	border-radius: 5px;
	border: 1px solid hsl(0, 0%, 46%);
	background-color: #fff;
	color: #000;
	font-size: 1rem;
	font-weight: 700;
	margin-top: 10px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #00bfa5;
		color: #fff;
		border: 1px solid #00bfa5;
	}
`;
