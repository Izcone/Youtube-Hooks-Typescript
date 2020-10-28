import React from 'react';
import { Header } from '../Utils/Header';

interface props {
	video: any;
	setSelectedVideo: (video: any) => void;
}

export const VideoItem: React.FC<props> = ({ video, setSelectedVideo }) => {
	return (
		<div style={{ cursor: 'pointer' }} onClick={() => setSelectedVideo(video)}>
			<img src={video.snippet.thumbnails.medium.url} alt="Thumbnail" />
			<Header>{video.snippet.title}</Header>
		</div>
	);
};
