import React, {ReactElement} from "react";
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {HeaderContainer, NameLabel} from "src/navigation/drawer/drawer.styles";
import {useAuthContext} from "src/contexts/auth/auth-provider";

const CustomDrawer = (props: DrawerContentComponentProps): ReactElement => {
  const {user, reset} = useAuthContext();

  const logout = async (): Promise<void> => {
    reset();
  };

  return (
    <DrawerContentScrollView {...props}>
      <HeaderContainer>
        <NameLabel>{`Olá, ${user?.name}`}</NameLabel>
      </HeaderContainer>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={logout} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
