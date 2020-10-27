import styled from 'styled-components';

interface ColumnProps {
	readonly width?: string;
}

const getWithGrid = (value: string) => {
	if (!value) return;

	let width = (parseInt(value) / 12) * 100;
	return `width: ${width}%`;
};

export const Row = styled.div`
	width: 100%;
	height: auto;
	float: left;
	display: flex;
	justify-content: center;
	box-sizing: border-box;
	&:before {
		content: '';
	}
	&:after {
		clear: both;
	}
`;

export const Column = styled.div<ColumnProps>`
	float: left;
	padding: 0.25rem;
	min-height: 1px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	@media only screen and (min-width: 768px) {
		${(props) => (props.width ? getWithGrid(props.width) : '8.33%')}
	}
`;
