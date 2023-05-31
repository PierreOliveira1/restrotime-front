import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.1);
`;

export const OnLoading = styled.div`
	display: flex;

	& div {
		width: 3.5rem;
		height: 3.5rem;
		background: #00bfa5;
		border-radius: 50%;
		margin-left: 15px;

		animation: move 1s ease-in-out infinite alternate;
	}

	& div:nth-child(1) {
		animation-delay: -0.4s;
	}

	& div:nth-child(2) {
		animation-delay: -0.2s;
	}

	@keyframes move {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(100%);
		}
	}
`;
