export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
  ingredients: string[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

export enum CheckoutStep {
  CART = 'CART',
  INFORMATION = 'INFORMATION',
  PAYMENT = 'PAYMENT',
  CONFIRMATION = 'CONFIRMATION'
}