import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
interface props {
	url: string;
	thumbnail: string;
}

export const VideoPlayer: React.FC<props> = ({ url, thumbnail }) => {
	return (
		<ReactPlayer
			className="react-player"
			url={url}
			light={thumbnail}
			controls
			width="100%"
		/>
	);
};
