const Filter = ({ filterValue, onHandleChange }) => {
	return (
		<>
			filter shown with:{" "}
			<input
				value={filterValue}
				onChange={onHandleChange}
			/>
		</>
	);
};

export default Filter;
