import React, {ReactNode, ReactElement, useState, useCallback} from "react";
import {useAuthContext} from "src/contexts/auth/auth-provider";
import {ProductDetails} from "src/models/product-details";
import {
  fetchProductDetails,
  changeProductFavoriteStatus,
} from "src/services/products/products-service";
import {ProductsDetailsContext} from "src/contexts/product-details/product-details-provider";

interface Props {
  children: ReactNode;
}

const ProductDetailsProvider = ({children}: Props): ReactElement => {
  const [productDetails, setProductDetails] = useState<ProductDetails>();
  const [isFavLoading, setFavLoading] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const {token} = useAuthContext();

  const handleFetchProducts = useCallback(
    async (id: string) => {
      try {
        setLoading(true);
        const productDetailsResponse = await fetchProductDetails({
          id,
          token,
        });

        setProductDetails(productDetailsResponse);

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    },
    [token],
  );

  const handleSetFavorite = async (id: string): Promise<void> => {
    try {
      setFavLoading(true);

      await changeProductFavoriteStatus({productId: id, token});

      await handleFetchProducts(id);

      setFavLoading(false);
    } catch (err) {
      setFavLoading(false);
    }
  };

  const reset = (): void => {
    setProductDetails(undefined);
  };

  return (
    <ProductsDetailsContext.Provider
      value={{
        fetchProductDetails: handleFetchProducts,
        productDetails,
        isFetching: isLoading,
        reset,
        isFavLoading,
        setFavorite: handleSetFavorite,
      }}>
      {children}
    </ProductsDetailsContext.Provider>
  );
};

export default ProductDetailsProvider;
