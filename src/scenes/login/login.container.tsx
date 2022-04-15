import React, {ReactElement, useState} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import Login from "src/scenes/login/login.native";
import {login} from "src/services/login/login-service";
import {LoginFormValues} from "src/scenes/login/validation";
import {useAuthContext} from "src/contexts/auth/auth-provider";
import {ServiceError} from "src/services/service-error";
import {Routes} from "src/navigation/routes";
import {UnauthenticatedStackParams} from "src/navigation/params";

type Props = NativeStackScreenProps<
  UnauthenticatedStackParams,
  Routes.REGISTER
>;

const LoginContainer = ({navigation}: Props): ReactElement => {
  const [isLoading, setLoading] = useState(false);
  const [externalError, setExternalError] = useState<string>();

  const {setUser, setToken} = useAuthContext();

  const handleFormSubmit = async (values: LoginFormValues): Promise<void> => {
    try {
      setLoading(true);

      const user = await login(values);
      setLoading(false);

      setUser({name: user.name, phone: user.phone, userId: user.userId});
      setToken({token: user.token});
    } catch (err) {
      const error = err as ServiceError;

      setLoading(false);
      setExternalError(error.message);
    }
  };

  const handleNavigateToRegister = (): void => {
    navigation.navigate(Routes.REGISTER);
  };

  return (
    <Login
      isLoading={isLoading}
      externalError={externalError}
      handleFormSubmit={handleFormSubmit}
      handleNavigateToRegister={handleNavigateToRegister}
    />
  );
};

export default LoginContainer;
