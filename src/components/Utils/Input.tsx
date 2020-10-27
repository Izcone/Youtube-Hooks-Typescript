import styled from 'styled-components';

type size = 'small' | 'medium' | 'large' | 'massive';

interface InputProps {
	readonly width?: size;
}

export const Input = styled.input<InputProps>`
	font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
	margin: 0;
	padding: 0.7em 1em 0.7em 1em;
	outline: 0;
	width: ${(props) =>
		!props.width
			? '60%'
			: props.width === 'small'
			? '40%'
			: props.width === 'medium'
			? '60%'
			: props.width === 'large'
			? '80%'
			: '100%'};
	color: rgba(0, 0, 0, 0.87);
	border: 1px solid rgba(34, 36, 38, 0.15);
	font-size: 1em;
	border-radius: 0.3rem;
	transition: color 0.1s ease, border-color 0.1s ease, box-shadow 0.25s ease-out,
		border-color 0.25s ease-out;
	&:focus {
		color: rgba(0, 0, 0, 0.95);
		border-color: rgba(223, 225, 229, 0);
		border-radius: 0.28571429rem;
		background: #fff;
		box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
		&::placeholder {
			color: transparent;
		}
	}
	&:hover {
		box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
		border-color: rgba(223, 225, 229, 0);
	}
`;
