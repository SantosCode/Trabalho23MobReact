import {createContext, useContext} from "react";
import {ProductsList} from "src/models/products-list";
import {FetchProductsRequest} from "src/services/products/fetch-products-request";

export interface ProductsContextType {
  productsList?: ProductsList;
  setProducts: (products?: ProductsList) => void;
  fetchProducts: (request: Partial<FetchProductsRequest>) => Promise<void>;
  isFetching: boolean;
}

export const ProductsContext = createContext<ProductsContextType>({
  setProducts: () => {},
  fetchProducts: async () => {},
  isFetching: false,
});

export const useProductsProvider = (): ProductsContextType =>
  useContext(ProductsContext);
