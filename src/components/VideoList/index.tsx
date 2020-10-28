import React from 'react';
import { VideoWrapper } from '../Utils/Wrappers';
import { VideoItem } from '../VideoItem';

interface props {
	videos: any[];
	setSelectedVideo: (video: any) => void;
}

export const VideoList: React.FC<props> = ({ videos, setSelectedVideo }) => {
	return (
		<div>
			{videos.map((video) => {
				return (
					<VideoWrapper key={video.id.videoId}>
						<VideoItem video={video} setSelectedVideo={setSelectedVideo} />
					</VideoWrapper>
				);
			})}
			;
		</div>
	);
};
