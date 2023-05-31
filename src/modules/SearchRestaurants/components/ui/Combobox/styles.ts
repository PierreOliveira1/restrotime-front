import styled from 'styled-components';

export const ComboBoxContainer = styled.div`
	position: relative;
	display: inline-block;
`;

export const ComboBoxButton = styled.button`
	padding: 8px;
	background-color: #f1f1f1;
	border: 1px solid #ccc;
	border-radius: 4px;
	cursor: pointer;
	font-size: 14px;
	text-align: left;
	width: 200px;
`;

export const ComboBoxMenu = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1;
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 0;
	margin: 0;
	list-style: none;
	max-height: 200px;
	overflow-y: auto;
`;

export const ComboBoxMenuItem = styled.li`
	padding: 8px;
	cursor: pointer;

	&:hover {
		background-color: #f1f1f1;
	}
`;
