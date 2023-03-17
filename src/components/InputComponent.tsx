import { Input, InputLabel } from '@mui/material';
import { ChangeEvent, useId } from 'react';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  title: string;
}

function InputComponent({ title, onChange }: Props) {
  const nameId = useId();

  return (
    <>
      <InputLabel htmlFor={nameId} className="!mb-2">
        {title}
      </InputLabel>
      <Input
        type="text"
        id={nameId}
        className="block w-full"
        placeholder="Enter campaign name"
        onChange={onChange}
        required
      />
    </>
  );
}

export default InputComponent;
