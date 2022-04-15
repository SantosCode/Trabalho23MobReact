import {Routes, StackNames} from "src/navigation/routes";
import {Product} from "src/models/product";

export type UnauthenticatedStackParams = {
  [Routes.LOGIN]: undefined;
  [Routes.REGISTER]: undefined;
};

export type AuthenticatedStackParams = {
  [Routes.DETAILS]: {
    selectedProduct: Product;
  };
  [StackNames.MAIN]: undefined;
};

export type MainAuthenticatedStackParams = {
  [Routes.HOME]: undefined;
  [Routes.FAVORITES]: undefined;
};
