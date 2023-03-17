import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useId } from 'react';

interface Props {
  value: string;
  items: {
    id: string;
    title: string;
    value: string;
  }[];
  title: string;
  onChange: (e: SelectChangeEvent) => void;
}

function SelectComponent({ value, items, title, onChange }: Props) {
  const selectId = useId();
  return (
    <>
      <InputLabel className="!mb-2" id={selectId}>
        {title}
      </InputLabel>
      <Select
        onChange={onChange}
        labelId={selectId}
        value={value}
        className="w-full block !mb-4"
      >
        {items.map(item => (
          <MenuItem key={item.id} value={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default SelectComponent;
