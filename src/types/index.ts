export interface TProduct {
  _id: string;
  productCode: string;
  productName: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  thumbnail: string;
  images: string[];
  rating: number;
  numReviews: number;
}

export interface TCategory {
  id: string;
  name: string;
  icon: string;
}
