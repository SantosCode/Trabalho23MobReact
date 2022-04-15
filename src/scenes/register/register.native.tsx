import React, {ReactElement} from "react";
import {useFormik} from "formik";
import {Screen} from "src/components/screen/screen.native";
import {Typography} from "src/components/typography/typography.native";
import {TypographyVariants} from "src/components/typography/types";
import {ButtonSizes, ButtonTypes} from "src/components/button/types";
import {KeyboardShift} from "src/components/keyboard/keyboard.native";
import {
  RegisterFormValues,
  registerSchema,
} from "src/scenes/register/validation";
import {
  Container,
  FormContainer,
  Input,
  Logo,
  SubmitButton,
  ErrorMessage,
} from "src/scenes/register/register.native.styles";

const logo = require("src/assets/images/logo-fiap.png");

interface Props {
  handleFormSubmit: (values: RegisterFormValues) => Promise<void>;
  externalError?: string;
  isLoading: boolean;
}

const Register = ({
  handleFormSubmit,
  externalError,
  isLoading,
}: Props): ReactElement => {
  const {errors, values, handleSubmit, touched, handleBlur, handleChange} =
    useFormik<RegisterFormValues>({
      initialValues: {
        email: "",
        name: "",
        password: "",
        phone: "",
      },
      onSubmit: handleFormSubmit,
      validationSchema: registerSchema,
    });

  const getFieldError = (field: keyof typeof touched): string | undefined => {
    if (touched[field] === true) {
      return errors[field];
    }
  };

  const hasErrors = (): boolean => {
    return (
      errors.email !== undefined ||
      errors.password !== undefined ||
      errors.password !== undefined ||
      errors.phone !== undefined
    );
  };

  return (
    <Screen>
      <KeyboardShift>
        <Container showsVerticalScrollIndicator={false}>
          <Logo source={logo} />
          <Typography variant={TypographyVariants.HEADING_XXL}>
            Store 23 MOB
          </Typography>
          <FormContainer>
            <Typography variant={TypographyVariants.HEADING_M}>
              Cadastrar nova conta
            </Typography>
            <Input
              label="Email"
              onChange={handleChange("email")}
              value={values.email}
              error={getFieldError("email")}
              onBlur={handleBlur("email")}
              textInputProps={{
                keyboardType: "email-address",
                autoCapitalize: "none",
              }}
            />
            <Input
              label="Nome"
              onChange={handleChange("name")}
              value={values.name}
              error={getFieldError("name")}
              onBlur={handleBlur("name")}
              textInputProps={{
                autoCapitalize: "words",
              }}
            />
            <Input
              label="Senha"
              onChange={handleChange("password")}
              value={values.password}
              error={getFieldError("password")}
              onBlur={handleBlur("password")}
              isPassword
              textInputProps={{
                autoCapitalize: "none",
              }}
            />
            <Input
              label="Celular"
              onChange={handleChange("phone")}
              value={values.phone}
              error={getFieldError("phone")}
              onBlur={handleBlur("phone")}
              isMasked
              maskType="cel-phone"
            />
            {externalError !== undefined && (
              <ErrorMessage>{externalError}</ErrorMessage>
            )}
            <SubmitButton
              label="Cadastrar"
              buttonSize={ButtonSizes.large}
              buttonType={ButtonTypes.primary}
              onPress={handleSubmit}
              isLoading={isLoading}
              isDisabled={hasErrors()}
            />
          </FormContainer>
        </Container>
      </KeyboardShift>
    </Screen>
  );
};

export default Register;
