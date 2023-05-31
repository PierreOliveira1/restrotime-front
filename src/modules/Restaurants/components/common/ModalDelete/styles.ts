import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.5);
	animation: fade 0.3s ease-in-out;

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Content = styled.div`
	width: 300px;
	height: 150px;
	background: #fff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 30px;
	animation: move 0.3s ease-in-out;

	& > h1 {
		font-size: 1.5rem;
		font-weight: 600;
	}

	@keyframes move {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(0);
		}
	}
`;

export const ContentButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
`;

export const ButtonConfirm = styled.button`
	width: 100px;
	height: 40px;
	background: #00bfa5;
	color: #fff;
	border: none;
	border-radius: 10px;
	font-size: 1.2rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #009688;
	}

	@media screen and (max-width: 400px) {
		& {
			font-size: 1rem;
		}
	}
`;

export const ButtonCancel = styled.button`
	width: 100px;
	height: 40px;
	background: #fff;
	color: #00bfa5;
	border: 1px solid #00bfa5;
	border-radius: 10px;
	font-size: 1.2rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #00bfa5;
		color: #fff;
	}

	@media screen and (max-width: 400px) {
		& {
			font-size: 1rem;
		}
	}
`;
