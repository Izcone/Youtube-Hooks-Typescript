import React from 'react';
import ReactPlayer from 'react-player';
import { Header } from '../Utils/Header';
import { VideoWrapper } from '../Utils/Wrappers';

interface props {
	video: any;
}

const MainVideo: React.FC<props> = ({ video }) => {
	if (!video) return <></>;

	const { id, snippet } = video;

	const url = `https://www.youtube.com/watch?v=${id.videoId}`;

	return (
		<VideoWrapper style={{ height: '25%' }}>
			<ReactPlayer
				controls
				width="100%"
				light={snippet.thumbnails.medium.url}
				url={url}
			/>
			<Header>{snippet.title}</Header>
			<span
				style={{
					fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
					fontWeight: 700,
				}}
			>
				{video.snippet.publishTime.substring(0, 10)}
			</span>
		</VideoWrapper>
	);
};

export default MainVideo;
