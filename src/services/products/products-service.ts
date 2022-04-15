import {EditFavoriteProductRequest} from "./edit-product-request";
import {request, basePath} from "src/services/request";
import {ServiceError} from "src/services/service-error";
import {AxiosError} from "axios";
import {FetchProductsRequest} from "src/services/products/fetch-products-request";
import {ProductDetailsRequest} from "src/services/products/product-details-request";
import {ProductsList} from "src/models/products-list";
import {ProductDetails} from "src/models/product-details";
import {FetchProductsListResponse} from "src/services/products/fetch-products-response";
import {ProductDetailsResponse} from "src/services/products/product-details-response";
import {FetchFavoriteProductsResponse} from "src/services/products/fetch-favorite-products-response";
import {FavoriteProducts} from "src/models/favorite-products";
import {DEFAULT_PRODUCTS_SIZE} from "src/utils/conts";

export const fetchProducts = async ({
  token,
  page = 1,
  perPage = DEFAULT_PRODUCTS_SIZE,
  ...rest
}: FetchProductsRequest): Promise<ProductsList> => {
  const path = `/${basePath}`;

  try {
    const response = await request.get<FetchProductsListResponse>(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        perPage,
        ...rest,
      },
    });

    return {
      ...response.data,
      products: response.data.products.map(product => ({
        id: product._id,
        isFavorite: product.favorite,
        ...product,
      })),
    };
  } catch (err) {
    const error = err as AxiosError;

    throw new ServiceError(error.message, error.code);
  }
};

export const fetchProductDetails = async ({
  id,
  token,
}: ProductDetailsRequest): Promise<ProductDetails> => {
  const path = `/${basePath}/product/${id}`;

  try {
    const response = await request.get<ProductDetailsResponse>(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      ...response.data,
      product: {
        createdDate: response.data.product.createdDate,
        name: response.data.product.name,
        price: response.data.product.price,
        updatedDate: response.data.product.updatedDate,
        stores: response.data.product.stores,
        isFavorite: response.data.product.favorite,
      },
    };
  } catch (err) {
    const error = err as AxiosError;

    throw new ServiceError(error.message, error.code);
  }
};

export const changeProductFavoriteStatus = async (
  requestData: EditFavoriteProductRequest,
): Promise<void> => {
  const path = `/${basePath}/manageFavorite`;

  try {
    await request.post(
      path,
      {productID: requestData.productId},
      {
        headers: {
          Authorization: `Bearer ${requestData.token}`,
        },
      },
    );
  } catch (err) {
    const error = err as AxiosError;

    throw new ServiceError(error.message, error.code);
  }
};

export const fetchFavoriteProducts = async (requestData: {
  token?: string;
}): Promise<FavoriteProducts> => {
  const path = `/${basePath}/getFavProducts`;

  try {
    const {data} = await request.get<FetchFavoriteProductsResponse>(path, {
      headers: {
        Authorization: `Bearer ${requestData.token}`,
      },
    });

    return {
      products: data.products.map(product => ({
        createdDate: new Date(product.createdDate),
        isFavorite: true,
        name: product.name,
        price: product.price,
        updatedDate: new Date(product.updatedDate),
        id: product._id,
        stores: product.stores.map(store => ({
          name: store.name,
          address: store.address,
          latitude: store.latitude,
          longitude: store.longitude,
          _id: store._id,
        })),
      })),
    };
  } catch (err) {
    const error = err as AxiosError;

    throw new ServiceError(error.message, error.code);
  }
};
