import React from 'react';
import useDebounce from '../useDebounce';

export const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = React.useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }
  return (
    <div>
      <input type="search" value={displayValue} onChange={handleChange} />
    </div>
  );
};
