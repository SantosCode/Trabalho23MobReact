import React, {ReactElement} from "react";
import ProductsProvider from "src/providers/products/products.provider";
import ProductDetailsProvider from "src/providers/product-details/product-details.provider";
import FavoritesProvider from "src/providers/favorites/favorites.provider";
import AppRouter from "src/app-router";

const AppProviders = (): ReactElement => (
  <ProductsProvider>
    <ProductDetailsProvider>
      <FavoritesProvider>
        <AppRouter />
      </FavoritesProvider>
    </ProductDetailsProvider>
  </ProductsProvider>
);

export default AppProviders;
