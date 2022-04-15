import React, {ReactElement} from "react";
import {useAuthContext} from "src/contexts/auth/auth-provider";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import LoginContainer from "src/scenes/login/login.container";
import HomeContainer from "src/scenes/home/home.container";
import FavoritesContainer from "src/scenes/favorites/favorites.container";
import DetailsContainer from "src/scenes/details/details.container";
import RegisterContainer from "src/scenes/register/register.container";
import {Routes, StackNames} from "src/navigation/routes";
import {
  UnauthenticatedStackParams,
  AuthenticatedStackParams,
  MainAuthenticatedStackParams,
} from "src/navigation/params";
import CustomDrawer from "src/navigation/drawer/drawer";

const MainAuthenticatedStack =
  createDrawerNavigator<MainAuthenticatedStackParams>();
const AuthenticatedStack =
  createNativeStackNavigator<AuthenticatedStackParams>();
const UnauthenticatedStack =
  createNativeStackNavigator<UnauthenticatedStackParams>();

const MainRouter = (): ReactElement => (
  <MainAuthenticatedStack.Navigator
    initialRouteName={Routes.HOME}
    drawerContent={props => <CustomDrawer {...props} />}>
    <MainAuthenticatedStack.Screen
      name={Routes.HOME}
      component={HomeContainer}
      options={{
        title: "Produtos",
        headerTitle: "Produtos",
      }}
    />
    <MainAuthenticatedStack.Screen
      name={Routes.FAVORITES}
      component={FavoritesContainer}
      options={{
        title: "Favoritos",
        headerTitle: "Favoritos",
      }}
    />
  </MainAuthenticatedStack.Navigator>
);

const AppRouter = (): ReactElement => {
  const {token} = useAuthContext();

  if (token !== undefined) {
    return (
      <AuthenticatedStack.Navigator initialRouteName={StackNames.MAIN}>
        <AuthenticatedStack.Screen
          name={StackNames.MAIN}
          component={MainRouter}
          options={{
            headerShown: false,
          }}
        />
        <AuthenticatedStack.Screen
          name={Routes.DETAILS}
          component={DetailsContainer}
          options={{
            title: undefined,
            headerTitle: "Detalhes",
          }}
        />
      </AuthenticatedStack.Navigator>
    );
  }

  return (
    <UnauthenticatedStack.Navigator>
      <UnauthenticatedStack.Group>
        <UnauthenticatedStack.Screen
          name={Routes.LOGIN}
          component={LoginContainer}
          options={{
            headerShown: false,
          }}
        />
        <UnauthenticatedStack.Screen
          name={Routes.REGISTER}
          component={RegisterContainer}
          options={{
            headerTitle: undefined,
            headerBackTitle: "Voltar",
          }}
        />
      </UnauthenticatedStack.Group>
    </UnauthenticatedStack.Navigator>
  );
};

export default AppRouter;
