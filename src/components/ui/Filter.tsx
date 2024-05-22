interface FilterProps {
  filterOptions: string[];
  selectedOption: string;
  onFilterChange: (option: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filterOptions, selectedOption, onFilterChange }) => {
  return (
    <div className="mb-4">
      <select
        value={selectedOption}
        onChange={(e) => onFilterChange(e.target.value)}
        className="bg-secondary text-white px-4 py-2 rounded"
      >
        {filterOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
