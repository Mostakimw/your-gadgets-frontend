import { SxProps, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
type TInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  sx?: SxProps;
  size?: "small" | "medium";
  fullWidth?: boolean;
};

const MyInput = ({
  name,
  type,
  label,
  placeholder,
  sx,
  size = "small",
  fullWidth,
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
            fullWidth={fullWidth}
            sx={{ ...sx }}
          />
        )}
      />
    </>
  );
};

export default MyInput;
