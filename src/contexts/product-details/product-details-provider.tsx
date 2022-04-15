import noop from "lodash/noop";
import {createContext, useContext} from "react";
import {ProductDetails} from "src/models/product-details";

export interface ProductsDetailsContextType {
  productDetails?: ProductDetails;
  fetchProductDetails: (id: string) => Promise<void>;
  isFetching: boolean;
  reset: () => void;
  setFavorite: (id: string) => Promise<void>;
  isFavLoading: boolean;
}

export const ProductsDetailsContext = createContext<ProductsDetailsContextType>(
  {
    fetchProductDetails: async () => {},
    isFetching: false,
    reset: noop,
    setFavorite: async () => {},
    isFavLoading: false,
  },
);

export const useProductDetailsProvider = (): ProductsDetailsContextType =>
  useContext(ProductsDetailsContext);
