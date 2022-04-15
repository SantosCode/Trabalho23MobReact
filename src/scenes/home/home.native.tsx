import React, {ReactElement} from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {FlatList, ListRenderItemInfo, ActivityIndicator} from "react-native";
import {Screen} from "src/components/screen/screen.native";
import {Product} from "src/models/product";
import {ListItem} from "src/components/list-item/list-item.native";
import {currency} from "src/helpers/currency/currency";
import {Typography} from "src/components/typography/typography.native";
import {TypographyVariants} from "src/components/typography/types";
import {IconographyNames} from "src/enums/iconography-names";
import {ListItemTrailingTypes} from "src/components/list-item/types";
import {useTheme} from "styled-components";
import {TagSizes, TagTypes, TagVariants} from "src/components/tag/types";
import {Routes} from "src/navigation/routes";
import {AuthenticatedStackParams} from "src/navigation/params";
import {
  Container,
  LoadingContainer,
  FooterContainer,
} from "src/scenes/home/home.native.styles";

interface Props {
  products?: Product[];
  isFetchingProducts: boolean;
  pageSize: number;
  handleRefresh: (params: {distanceFromEnd: number}) => Promise<void>;
  isFetchingMoreProcuts: boolean;
}

type NavigationParams = NativeStackNavigationProp<
  AuthenticatedStackParams,
  Routes.DETAILS
>;

const Home = ({
  products,
  isFetchingProducts,
  handleRefresh,
  isFetchingMoreProcuts,
}: Props): ReactElement => {
  const {palette} = useTheme();
  const navigation = useNavigation<NavigationParams>();

  const renderContent = (): ReactElement => {
    if (isFetchingProducts && !isFetchingMoreProcuts) {
      return (
        <LoadingContainer>
          <ActivityIndicator size="large" />
        </LoadingContainer>
      );
    }

    return (
      <FlatList
        data={products}
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
        onEndReached={handleRefresh}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id}
        ListFooterComponent={() => {
          if (isFetchingMoreProcuts) {
            return (
              <FooterContainer>
                <LoadingContainer>
                  <ActivityIndicator size="small" />
                </LoadingContainer>
              </FooterContainer>
            );
          }

          return null;
        }}
      />
    );
  };

  return (
    <Screen>
      <Container>{renderContent()}</Container>
    </Screen>
  );
};

export default Home;
