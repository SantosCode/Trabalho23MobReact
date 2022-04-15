import {useNavigation} from "@react-navigation/native";
import React, {ReactElement, useEffect, useState} from "react";
import {useProductsProvider} from "src/contexts/products/products-provider";
import Home from "src/scenes/home/home.native";
import {DEFAULT_PRODUCTS_SIZE} from "src/utils/conts";

const HomeContainer = (): ReactElement => {
  const PAGE_SIZE_STEP = 10;
  const {fetchProducts, productsList, isFetching} = useProductsProvider();
  const [pageSize, setPageSize] = useState(DEFAULT_PRODUCTS_SIZE);
  const [isFetchingMoreProcuts, setFetchingMoreProcuts] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener("focus", () => fetchProducts({}));

    return () => navigation.removeListener("focus", () => fetchProducts({}));
  }, [fetchProducts, navigation]);

  const handleRefresh = async (): Promise<void> => {
    const newPageSize = pageSize + PAGE_SIZE_STEP;

    if (isFetchingMoreProcuts) {
      return;
    }

    if (
      productsList?.totalItems !== undefined &&
      productsList?.totalItems <= pageSize
    ) {
      return;
    }

    setFetchingMoreProcuts(true);

    await fetchProducts({
      perPage: newPageSize,
    });

    setFetchingMoreProcuts(false);

    setPageSize(newPageSize);
  };

  return (
    <Home
      products={productsList?.products}
      isFetchingProducts={isFetching}
      pageSize={pageSize}
      handleRefresh={handleRefresh}
      isFetchingMoreProcuts={isFetchingMoreProcuts}
    />
  );
};

export default HomeContainer;
