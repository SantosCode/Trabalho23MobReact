import React, {ReactElement} from "react";
import {useFormik} from "formik";
import {LoginFormValues, loginSchema} from "src/scenes/login/validation";
import {Typography} from "src/components/typography/typography.native";
import {TypographyVariants} from "src/components/typography/types";
import {Screen} from "src/components/screen/screen.native";
import {ButtonSizes, ButtonTypes} from "src/components/button/types";
import {KeyboardShift} from "src/components/keyboard/keyboard.native";
import {
  Container,
  FormContainer,
  Input,
  SubmitButton,
  Logo,
  RegisterButton,
  ErrorMessage,
  ContentContainer,
} from "src/scenes/login/login.native.styles";

const logo = require("src/assets/images/logo-fiap.png");

interface Props {
  handleFormSubmit: (values: LoginFormValues) => Promise<void>;
  externalError?: string;
  isLoading: boolean;
  handleNavigateToRegister: () => void;
}

const Login = ({
  handleFormSubmit,
  externalError,
  isLoading,
  handleNavigateToRegister,
}: Props): ReactElement => {
  const {values, errors, handleBlur, handleChange, handleSubmit, touched} =
    useFormik<LoginFormValues>({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: handleFormSubmit,
      validationSchema: loginSchema,
    });

  const getEmailError = (): string | undefined => {
    if (touched.email === true) {
      return errors.email;
    }
  };

  const getPasswordError = (): string | undefined => {
    if (touched.password === true) {
      return errors.password;
    }
  };

  return (
    <Screen>
      <Container>
        <KeyboardShift>
          <ContentContainer>
            <Logo source={logo} />
            <Typography variant={TypographyVariants.HEADING_XXL}>
              Store 23 MOB
            </Typography>
            <FormContainer>
              <Typography variant={TypographyVariants.HEADING_M}>
                Faça o login
              </Typography>
              <Input
                label="Email"
                onChange={handleChange("email")}
                value={values.email}
                error={getEmailError()}
                onBlur={handleBlur("email")}
                textInputProps={{
                  keyboardType: "email-address",
                  autoCapitalize: "none",
                }}
              />
              <Input
                label="Senha"
                onChange={handleChange("password")}
                value={values.password}
                error={getPasswordError()}
                onBlur={handleBlur("password")}
                isPassword
                textInputProps={{
                  autoCapitalize: "none",
                }}
              />
              {externalError !== undefined && (
                <ErrorMessage>{externalError}</ErrorMessage>
              )}
              <SubmitButton
                label="Entrar"
                buttonSize={ButtonSizes.large}
                buttonType={ButtonTypes.primary}
                onPress={handleSubmit}
                isLoading={isLoading}
                isDisabled={
                  errors.email !== undefined || errors.password !== undefined
                }
              />
              <RegisterButton
                label="Cadastrar"
                buttonSize={ButtonSizes.large}
                buttonType={ButtonTypes.secondary}
                onPress={handleNavigateToRegister}
              />
            </FormContainer>
          </ContentContainer>
        </KeyboardShift>
      </Container>
    </Screen>
  );
};

export default Login;
