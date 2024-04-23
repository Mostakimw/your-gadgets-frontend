export interface TProduct {
  id: string;
  productCode: string;
  productName: string;
  thumbnail: string;
  image: string[];
  price: number;
  discount: number;
  rating: number;
  brand: string;
  category: string;
  description: string;
}

export interface TCategory {
  id: string;
  name: string;
  icon: string;
}
