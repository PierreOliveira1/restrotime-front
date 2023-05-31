import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1024px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TitleContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
	margin-bottom: 20px;
	width: 100%;
`;

export const SearchContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
	margin-bottom: 20px;

	@media (max-width: 769px) {
		width: 90%;
		flex-direction: column;
		margin-left: 10px;
		margin-right: 10px;
	}
`;

export const SearchInput = styled.input`
	width: 70%;
	height: 50px;
	border: 1px solid #00bfa5;
	color: #00bfa5;
	border-radius: 5px;
	padding: 0 20px;
	font-size: 1rem;
	font-weight: 700;
	transition: all 0.2s ease-in-out;
	outline: none;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

	@media (max-width: 1025px) {
		width: 35%;
	}
	@media (max-width: 769px) {
		width: 100%;
		padding: 0 5px;
	}
`;

export const ButtonLink = styled.button`
	width: fit-content;
	height: fit-content;
	background: #00bfa5;
	font-size: 1rem;
	color: #fff;
	height: 50px;
	padding: 10px 20px;
	margin-left: 20px;
	border-radius: 5px;
	text-decoration: none;
	font-weight: 700;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #009688;
	}

	@media (max-width: 769px) {
		margin-left: 0;
		width: 100%;
		margin-top: 20px;
	}

	@media screen and (max-width: 500px) {
		& {
			font-size: 0.8rem;
			padding: 5px 10px;
		}
	}
`;

export const SearchInputDate = styled.input`
	width: 25%;
	height: 50px;
	border: 1px solid #00bfa5;
	color: #00bfa5;
	border-radius: 5px;
	padding: 0 20px;
	margin-left: 20px;
	font-size: 1rem;
	font-weight: 700;
	transition: all 0.2s ease-in-out;
	outline: none;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

	@media (max-width: 769px) {
		margin-left: 0;
		width: 100%;
		margin-top: 20px;
		padding: 0 5px;
	}
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
