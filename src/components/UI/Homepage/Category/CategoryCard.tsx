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
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }: { category: TCategory }) => {
  return (
    <Grid item xs={6} sm={6} md={4} lg={2}>
      <Card variant="outlined" sx={{ height: 150, textAlign: "center" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="30px 10px"
          component={Link}
          href={`/category/${category?.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          <CardMedia>
            <Image src={category?.icon} width={50} height={50} alt="mobile" />
          </CardMedia>
          <Typography variant="body2" fontWeight={600} marginTop={2}>
            {category?.name}
          </Typography>
        </Stack>
      </Card>
    </Grid>
  );
};

export default CategoryCard;
