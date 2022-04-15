import React, {ReactElement, useState} from "react";
import {ActivityIndicator, StyleSheet} from "react-native";
import MapView, {Marker} from "react-native-maps";
import {ProductDetails} from "src/models/product-details";
import {Screen} from "src/components/screen/screen.native";
import {Typography} from "src/components/typography/typography.native";
import {TypographyVariants} from "src/components/typography/types";
import {currency} from "src/helpers/currency/currency";
import {Store} from "src/models/store";
import {Tag} from "src/components/tag/tag.native";
import {TagSizes, TagTypes, TagVariants} from "src/components/tag/types";
import {Button} from "src/components/button/button.native";
import {ButtonSizes, ButtonTypes} from "src/components/button/types";
import {IconographyNames} from "src/enums/iconography-names";
import {
  Container,
  HeaderContainer,
  MapContainer,
} from "src/scenes/details/details.native.styles";

export interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Props {
  isFetching: boolean;
  productDetails?: ProductDetails;
  currentLocation?: Coordinates | null;
  handleSetFavorite: () => Promise<void>;
  isFavLoading: boolean;
  isFetchingLocation: boolean;
}

const Details = ({
  isFetching,
  productDetails,
  currentLocation,
  handleSetFavorite,
  isFavLoading,
  isFetchingLocation,
}: Props): ReactElement => {
  const [selectedStore, setSelectedStore] = useState<Store>();

  const renderFavoriteButton = (): ReactElement => {
    if (productDetails?.product.isFavorite === true) {
      return (
        <>
          <Tag
            label="Favorito"
            size={TagSizes.medium}
            type={TagTypes.info}
            variant={TagVariants.primary}
          />
          <Button
            buttonSize={ButtonSizes.small}
            buttonType={ButtonTypes.tertiary}
            label="Desfavoritar"
            onPress={handleSetFavorite}
            withLeadingIcon
            leadingIconName={IconographyNames.minusCircle}
            isLoading={isFavLoading}
          />
        </>
      );
    }

    return (
      <Button
        buttonSize={ButtonSizes.small}
        buttonType={ButtonTypes.tertiary}
        label="Favoritar"
        onPress={handleSetFavorite}
        withLeadingIcon
        leadingIconName={IconographyNames.addCircle}
        isLoading={isFavLoading}
      />
    );
  };

  const renderTopContent = (): ReactElement => {
    if (isFetching) {
      return <ActivityIndicator size="large" />;
    }

    if (productDetails === undefined) {
      return (
        <Typography variant={TypographyVariants.HEADING_XXL}>
          Não foram encontrados produtos
        </Typography>
      );
    }

    return (
      <HeaderContainer>
        <Typography variant={TypographyVariants.HEADING_XL}>
          {productDetails?.product.name}
        </Typography>
        <Typography variant={TypographyVariants.EMPHASIS_M}>
          {currency.format(productDetails?.product.price)}
        </Typography>
        {renderFavoriteButton()}
        {selectedStore !== undefined && (
          <Typography variant={TypographyVariants.HEADING_M}>
            {selectedStore.address}
          </Typography>
        )}
      </HeaderContainer>
    );
  };

  const renderMapContent = (): ReactElement | null => {
    if (isFetchingLocation) {
      return <ActivityIndicator size="large" />;
    }

    if (currentLocation === null) {
      return (
        <Typography variant={TypographyVariants.DIALOG}>
          Não foi possível buscar sua localização
        </Typography>
      );
    }

    if (productDetails === undefined || currentLocation === undefined) {
      return null;
    }

    return (
      <MapView
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.06,
        }}
        style={StyleSheet.absoluteFill}>
        {productDetails.product.stores.map(store => (
          <Marker
            coordinate={{
              longitude: store.longitude,
              latitude: store.latitude,
            }}
            onPress={() => {
              setSelectedStore(store);
            }}
            key={store._id}
          />
        ))}
      </MapView>
    );
  };

  return (
    <Screen>
      <Container>
        {renderTopContent()}
        <MapContainer>{renderMapContent()}</MapContainer>
      </Container>
    </Screen>
  );
};

export default Details;
