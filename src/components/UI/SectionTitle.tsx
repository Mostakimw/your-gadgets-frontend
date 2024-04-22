import { Box, Typography } from "@mui/material";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ position: "relative", marginBottom: "20px" }}>
      <Typography variant="h3" color="body2">
        {children}
      </Typography>
      <Box
        component="div"
        sx={{
          position: "absolute",
          //   bottom: "-5px",
          left: 0,
          width: "70px",
          height: "3px",
          backgroundColor: "primary.main",
        }}
      ></Box>
    </Box>
  );
};

export default SectionTitle;
