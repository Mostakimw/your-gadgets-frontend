import { TCategory } from "@/types";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const CategoryCard = ({ category }: { category: TCategory }) => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card variant="outlined">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="30px 0"
        >
          <CardMedia>
            <AcUnitIcon
              sx={{
                width: 50,
                height: 50,
                marginBottom: 2,
              }}
            />
          </CardMedia>
          <Typography variant="body2" fontWeight={600}>{category?.name}</Typography>
        </Stack>
      </Card>
    </Grid>
  );
};

export default CategoryCard;
