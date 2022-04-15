import {createContext, useContext} from "react";
import {FavoriteProducts} from "src/models/favorite-products";

export interface FavoriteProductsType {
  favoriteProducts?: FavoriteProducts;
  isFetching: boolean;
  fetchFavoriteProducts: () => Promise<void>;
}

export const FavoriteProductsContext = createContext<FavoriteProductsType>({
  isFetching: false,
  fetchFavoriteProducts: async () => {},
});

export const useFavoriteProductsProvider = (): FavoriteProductsType =>
  useContext(FavoriteProductsContext);
