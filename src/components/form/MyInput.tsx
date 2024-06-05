import { SxProps, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
type TInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  sx?: SxProps;
  size?: "small" | "medium";
};

const MyInput = ({
  name,
  type,
  label,
  placeholder,
  sx,
  size = "small",
}: TInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            type="text"
            placeholder={placeholder}
            size={size}
            sx={{ ...sx }}
          />
        )}
      />
    </>
  );
};

export default MyInput;
