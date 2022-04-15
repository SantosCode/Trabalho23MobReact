import React, {ReactElement, useState} from "react";
import Register from "src/scenes/register/register.native";
import {RegisterFormValues} from "src/scenes/register/validation";
import {ServiceError} from "src/services/service-error";
import {register} from "src/services/register/register-service";
import {login} from "src/services/login/login-service";
import {useAuthContext} from "src/contexts/auth/auth-provider";

const RegisterContainer = (): ReactElement => {
  const [isLoading, setLoading] = useState(false);
  const [externalError, setExternalError] = useState<string>();

  const {setUser, setToken} = useAuthContext();

  const handleFormSubmit = async (
    values: RegisterFormValues,
  ): Promise<void> => {
    try {
      setLoading(true);

      await register(values);

      const userResponse = await login({
        email: values.email,
        password: values.password,
      });

      setUser({
        name: userResponse.name,
        phone: userResponse.phone,
        userId: userResponse.userId,
      });
      setToken({token: userResponse.token});

      setLoading(false);
    } catch (err) {
      setLoading(false);
      const error = err as ServiceError;

      setExternalError(error.message);
    }
  };

  return (
    <Register
      handleFormSubmit={handleFormSubmit}
      isLoading={isLoading}
      externalError={externalError}
    />
  );
};

export default RegisterContainer;
