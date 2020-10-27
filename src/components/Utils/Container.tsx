import styled from 'styled-components';

type textAlign = 'justify' | 'center' | 'left' | 'right';

interface ContainerProps {
	readonly fluid?: boolean;
	readonly textAlign?: textAlign;
}

export const Container = styled.div<ContainerProps>`
	max-width: ${(props) => (props.fluid ? '100%' : '1155px')};
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
	@media (max-width: 768px) {
		min-width: 720px;
	}

	@media (max-width: 576px) {
		min-width: 540px;
	}
`;
