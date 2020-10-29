import styled from 'styled-components';

export const VideoWrapper = styled.div`
	position: relative;
	height: fit-content;
	background: #fff;
	box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
	margin: 1rem 0;
	width: 100%;
	padding: 1em 1em;
	border-radius: 0.28571429rem;
	border: 1px solid rgba(34, 36, 38, 0.15);
	@media only screen and (max-width: 768px) {
		margin-right: 0px !important;
		padding: 0px;
	}
`;
