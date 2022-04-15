import React, {ReactElement, ReactNode, useCallback, useState} from "react";
import {useAuthContext} from "src/contexts/auth/auth-provider";
import {ProductsList} from "src/models/products-list";
import {fetchProducts} from "src/services/products/products-service";
import {FetchProductsRequest} from "src/services/products/fetch-products-request";
import {ProductsContext} from "src/contexts/products/products-provider";

interface Props {
  children: ReactNode;
}

const ProductsProvider = ({children}: Props): ReactElement => {
  const [products, setProducts] = useState<ProductsList>();
  const [isLoading, setLoading] = useState(false);

  const {token} = useAuthContext();

  const handleFetchProducts = useCallback(
    async (values: Partial<FetchProductsRequest>): Promise<void> => {
      try {
        setLoading(true);

        const productsResponse = await fetchProducts({
          token: token,
          orderBy: values.orderBy,
          orderDirection: values.orderDirection,
          page: values.page,
          perPage: values.perPage,
          search: values.search,
        });

        setLoading(false);

        setProducts(productsResponse);
      } catch (err) {
        setLoading(false);
      }
    },
    [token],
  );

  return (
    <ProductsContext.Provider
      value={{
        fetchProducts: handleFetchProducts,
        isFetching: isLoading,
        setProducts,
        productsList: products,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
