import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const Header = styled.header`
	width: 100vw;
	height: 60px;
	background: #00bfa5;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: fixed;

	& > h1 {
		color: #fff;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		margin-left: 20px;
	}

	@media screen and (max-width: 400px) {
		& > h1 {
			font-size: 1.2rem;
		}
	}
`;

export const Content = styled.main`
	width: 100%;
	height: calc(100vh - 60px);
	padding-top: 60px;
`;
