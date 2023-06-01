import styled from 'styled-components';

export const Container = styled.button<{
	marginTop?: string;
	width?: string;
}>`
	height: 30px;
	width: ${(props) => props.width || 'fit-content'};
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgb(0, 191, 165);
	border-radius: 5px;
	border: 1px solid rgb(0, 191, 165);
	cursor: pointer;
	outline: 0;
	font-size: 16px;
	color: #fff;
	font-weight: 600;
	padding: 10px;
	transition: all 0.2s ease-in-out;
	margin-top: ${(props) => props.marginTop || '0px'};

	&:hover {
		background: rgb(0, 191, 165, 0.8);
		border: 1px solid rgb(0, 191, 165, 0.8);
	}
`;
