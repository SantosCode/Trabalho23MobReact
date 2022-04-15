import React, {ReactElement, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {useFavoriteProductsProvider} from "src/contexts/favorites/favorites-provider";
import Favorites from "src/scenes/favorites/favorites.native";

const FavoritesContainer = (): ReactElement => {
  const {isFetching, favoriteProducts, fetchFavoriteProducts} =
    useFavoriteProductsProvider();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener("focus", () => fetchFavoriteProducts());

    return () =>
      navigation.removeListener("focus", () => fetchFavoriteProducts());
  }, [fetchFavoriteProducts, navigation]);

  return (
    <Favorites isFetching={isFetching} favoriteProducts={favoriteProducts} />
  );
};

export default FavoritesContainer;
