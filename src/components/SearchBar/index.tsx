import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Input } from '../Utils/Input';
import { StyledButton } from '../Utils/Button';
import './index.css';

interface props {
	onSearch: (term: string) => Promise<void>;
}

const SearchBar: React.FC<props> = ({ onSearch }) => {
	const [term, setTerm] = useState<string>('');

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSearch(term);
			}}
		>
			<Input
				placeholder="Search..."
				value={term}
				onChange={(e) => setTerm(e.currentTarget.value.toString())}
				type="text"
				width="medium"
				className="adjust"
			/>
			<StyledButton onClick={() => onSearch(term)}>
				<FaSearch />
			</StyledButton>
		</form>
	);
};

export default SearchBar;
