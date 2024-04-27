import ProductDetails from "@/components/UI/Product/ProductDetails";
import { TProduct } from "@/types";
import { Container } from "@mui/material";

interface TProductId {
  params: {
    productId: string;
  };
}

const generateStaticParams = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/products`);
  const products = await res.json();

  return products.slice(0, 2).map((product: TProduct) => {
    productId: product.id;
  });
};

const ProductDetailsPage = async ({ params }: TProductId) => {
  const res = await fetch(
    `${process.env.SERVER_URL}/${params?.productId}`
  );
  const product = await res.json();

  return (
    <Container sx={{ marginTop: 8 }}>
      <ProductDetails product={product} />
    </Container>
  );
};

export default ProductDetailsPage;
