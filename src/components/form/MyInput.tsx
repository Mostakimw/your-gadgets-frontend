import { SxProps, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
type TInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  sx?: SxProps;
};

const MyInput = ({ name, type, label, placeholder, sx }: TInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <TextField {...field} type="text" placeholder={placeholder} />
        )}
      />
    </>
  );
};

export default MyInput;
