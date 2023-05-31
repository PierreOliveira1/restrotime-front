import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
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

export const ContainerCards = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-row-gap: 1rem;
	padding-top: 20px;
	padding-bottom: 50px;
	overflow: auto;
	justify-items: center;

	@media (max-width: 1300px) {
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 2rem;
	}

	@media (max-width: 1090px) {
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 3rem;
	}

	@media (max-width: 830px) {
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 4rem;
	}

	@media (max-width: 560px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(10, 1fr);
	}
`;

export const ButtonLink = styled(Link)`
	width: fit-content;
	height: fit-content;
	background: #00bfa5;
	color: #fff;
	padding: 10px 20px;
	margin-right: 20px;
	border-radius: 5px;
	text-decoration: none;
	font-weight: 700;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #009688;
	}

	@media screen and (max-width: 500px) {
		& {
			font-size: 0.8rem;
			padding: 5px 10px;
		}
	}
`;

export const ContentMessage = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 13%;

	& > h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #00bfa5;
	}

	@media screen and (max-width: 400px) {
		& > h3 {
			font-size: 1.2rem;
		}
	}
`;
