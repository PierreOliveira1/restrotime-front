import styled from 'styled-components';

export const Container = styled.input`
	height: 30px;
	width: 30%;
	background: rgb(0, 191, 165);
	border-radius: 5px;
	border: 1px solid rgb(0, 191, 165);
	cursor: pointer;
	outline: 0;
	font-size: 16px;
	color: #fff;
	font-weight: 600;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: rgb(0, 191, 165, 0.8);
		border: 1px solid rgb(0, 191, 165, 0.8);
	}
`;
