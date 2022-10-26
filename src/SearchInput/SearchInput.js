import React from 'react';
import { useMedia } from '../Hooks/useMedia';
import useDebounce from '../useDebounce';
import style from './SearchInput.module.css';

export const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = React.useState(value);
  const mobileMicro = useMedia('(max-width:375px)');
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }
  return (
    <div className={`${mobileMicro ? style.inputMobileMicro : style.input}`}>
      <input
        type="search"
        placeholder="Digite aqui seu anime"
        value={displayValue}
        onChange={handleChange}
      />
    </div>
  );
};
