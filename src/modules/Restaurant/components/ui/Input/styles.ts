import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const Label = styled.label`
	font-weight: bold;
`;

export const InputForm = styled.input`
	width: 100%;
	height: 35px;
	border: 1px solid hsl(0, 0%, 46%);
	border-radius: 5px;
	padding: 2px 10px;
	outline: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
