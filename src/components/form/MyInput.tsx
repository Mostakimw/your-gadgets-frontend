import { SxProps, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
type TInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  sx?: SxProps;
  size?: "small" | "medium";
  fullWidth?: boolean;
  labelText?: string;
};

const MyInput = ({
  name,
  type,
  label,
  placeholder,
  sx,
  size = "small",
  fullWidth,
  labelText,
}: TInputProps) => {
  return (
    <>
      {labelText && (
        <Typography variant="subtitle1" fontWeight={600}>
          {labelText}
        </Typography>
      )}
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
