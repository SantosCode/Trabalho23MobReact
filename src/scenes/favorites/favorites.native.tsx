import React, {ReactElement} from "react";
import {FlatList, ActivityIndicator, ListRenderItemInfo} from "react-native";
import {Product} from "src/models/product";
import {FavoriteProducts} from "src/models/favorite-products";
import {ListItem} from "src/components/list-item/list-item.native";
import {ListItemTrailingTypes} from "src/components/list-item/types";
import {Screen} from "src/components/screen/screen.native";
import {currency} from "src/helpers/currency/currency";
import {IconographyNames} from "src/enums/iconography-names";
import {useTheme} from "styled-components";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AuthenticatedStackParams} from "src/navigation/params";
import {Routes} from "src/navigation/routes";
import {TagSizes, TagTypes, TagVariants} from "src/components/tag/types";
import {Typography} from "src/components/typography/typography.native";
import {TypographyVariants} from "src/components/typography/types";
import {
  Container,
  LoadingContainer,
} from "src/scenes/favorites/favorites.native.styles";

interface Props {
  isFetching: boolean;
  favoriteProducts?: FavoriteProducts;
}

type NavigationParams = NativeStackNavigationProp<
  AuthenticatedStackParams,
  Routes.DETAILS
>;

const Favorites = ({isFetching, favoriteProducts}: Props): ReactElement => {
  const {palette} = useTheme();
  const navigation = useNavigation<NavigationParams>();

  const renderContent = (): ReactElement => {
    if (isFetching) {
      return (
        <LoadingContainer>
          <ActivityIndicator size="large" />
        </LoadingContainer>
      );
    }

    return (
      <FlatList
        data={favoriteProducts?.products}
        renderItem={({item}: ListRenderItemInfo<Product>) => (
          <ListItem
            primaryText={item.name}
            secondaryText={currency.format(item.price)}
            hasDivider
            trailingIconName={IconographyNames.chevronRight}
            onPress={() => {
              navigation.navigate(Routes.DETAILS, {
                selectedProduct: item,
              });
            }}
            trailingType={ListItemTrailingTypes.textAndIcon}
            trailingIconColor={palette.primary.regular}
            trailingText="Detalhes"
            trailingTextProps={{
              style: {
                color: palette.primary.regular,
              },
            }}
            tertiaryContentTagProps={(() => {
              if (item.isFavorite) {
                return {
                  label: item.isFavorite ? "Favorito" : "Clique para favoritar",
                  size: TagSizes.medium,
                  type: item.isFavorite ? TagTypes.info : TagTypes.neutral,
                  variant: item.isFavorite
                    ? TagVariants.primary
                    : TagVariants.secondary,
                };
              }

              return undefined;
            })()}
          />
        )}
        ListEmptyComponent={() => (
          <Typography variant={TypographyVariants.PARAGRAPH_S}>
            Não foram encontrados produtos
          </Typography>
        )}
        keyExtractor={item => item.id}
      />
    );
  };

  return (
    <Screen>
      <Container>{renderContent()}</Container>
    </Screen>
  );
};

export default Favorites;
