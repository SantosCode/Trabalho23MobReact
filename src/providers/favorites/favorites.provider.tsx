import React, {ReactNode, useCallback, useState} from "react";
import {FavoriteProducts} from "src/models/favorite-products";
import {FavoriteProductsContext} from "src/contexts/favorites/favorites-provider";
import {fetchFavoriteProducts} from "src/services/products/products-service";
import {useAuthContext} from "src/contexts/auth/auth-provider";

interface Props {
  children: ReactNode;
}

const FavoritesProvider = ({children}: Props) => {
  const [isFetching, setFetching] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState<FavoriteProducts>();

  const {token} = useAuthContext();

  const handleFetchFavorites = useCallback(async (): Promise<void> => {
    try {
      setFetching(true);

      const responseFavorites = await fetchFavoriteProducts({token});

      setFavoriteProducts(responseFavorites);

      setFetching(false);
    } catch (err) {
      setFetching(false);
    }
  }, [token]);

  return (
    <FavoriteProductsContext.Provider
      value={{
        isFetching,
        favoriteProducts,
        fetchFavoriteProducts: handleFetchFavorites,
      }}>
      {children}
    </FavoriteProductsContext.Provider>
  );
};

export default FavoritesProvider;
