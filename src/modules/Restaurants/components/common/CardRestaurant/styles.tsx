import styled from 'styled-components';

export const Content = styled.div`
	width: 235px;
	height: 100px;
	display: flex;
	flex-direction: row;
	padding-left: 10px;
	border: 1px solid #00bfa5;
	border-radius: 10px;
	box-shadow: 0px 0px 5px #00bfa550;

	& > div:first-child {
		flex: 4;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	& > div:last-child {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	& > div:first-child > div > h3 {
		font-size: 16px;
		font-weight: 600;
		color: #000;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	& > div:first-child > div > p {
		font-size: 12px;
		color: #666;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	& > div:first-child > p {
		font-size: 12px;
		font-weight: 400;
		color: #000;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export const Button = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
`;
