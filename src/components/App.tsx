import React, { useState, useEffect } from 'react';
import useVideos from '../hooks/useVideos';
import MainVideo from './MainVideo';
import SearchBar from './SearchBar';
import { Container } from './Utils/Container';
import { Row, Column } from './Utils/Grid';

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState<{}>();
	const [videos, search] = useVideos('');

	useEffect(() => setSelectedVideo(videos[0]), [videos]);

	return (
		<Container textAlign="center">
			<SearchBar onSearch={search} />
			<Row>
				<Column width="10">
					<MainVideo video={selectedVideo} />
				</Column>
			</Row>
		</Container>
	);
};

export default App;
