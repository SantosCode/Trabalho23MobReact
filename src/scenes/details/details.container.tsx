import React, {ReactElement, useEffect, useCallback, useState} from "react";
import {Platform} from "react-native";
import Location from "react-native-location";
import {DrawerScreenProps} from "@react-navigation/drawer";
import {request, check, PERMISSIONS, RESULTS} from "react-native-permissions";
import Details, {Coordinates} from "src/scenes/details/details.native";
import {AuthenticatedStackParams} from "src/navigation/params";
import {Routes} from "src/navigation/routes";
import {useProductDetailsProvider} from "src/contexts/product-details/product-details-provider";

type Props = DrawerScreenProps<AuthenticatedStackParams, Routes.DETAILS>;

const DetailsContainer = ({route, navigation}: Props): ReactElement => {
  const [currentLocation, setCurrentLocation] = useState<Coordinates | null>();
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [permissionError, setError] = useState<string>();
  const {
    fetchProductDetails,
    isFetching,
    productDetails,
    reset,
    setFavorite,
    isFavLoading,
  } = useProductDetailsProvider();
  const {selectedProduct} = route.params;

  const fetchiOSLocation = useCallback(async () => {
    try {
      const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      if (result === RESULTS.BLOCKED) {
        setError("É necessário autorizar para visualizar as lojas");
        return;
      }

      if (result === RESULTS.GRANTED) {
        setIsFetchingLocation(true);
        const location = await Location.getLatestLocation({timeout: 10000});

        const newLocation =
          location === null
            ? location
            : {
                latitude: location.latitude,
                longitude: location.longitude,
              };

        setCurrentLocation(newLocation);

        setIsFetchingLocation(false);
      }
    } catch (err) {
      // Error not handled
    }
  }, []);

  const fetchAndroidLocation = useCallback(async () => {
    try {
      const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (result === RESULTS.BLOCKED) {
        setError("É necessário autorizar para visualizar as lojas");
        return;
      }

      if (result === RESULTS.GRANTED) {
        setIsFetchingLocation(true);
        const location = await Location.getLatestLocation({timeout: 10000});

        const newLocation =
          location === null
            ? location
            : {
                latitude: location.latitude,
                longitude: location.longitude,
              };

        setCurrentLocation(newLocation);

        setIsFetchingLocation(false);
      }
    } catch (err) {
      // Error not handled
    }
  }, []);

  const requestiOSPermissions = useCallback(async () => {
    try {
      const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, {
        title: "Permissão para usar localização",
        message:
          "Precisamos da sua permissão para exibir as lojas próximas a você",
        buttonPositive: "Confirmar",
      });

      if (result === RESULTS.GRANTED) {
        fetchiOSLocation();
      }
    } catch (err) {
      // Error not handled
    }
  }, [fetchiOSLocation]);

  const requestAndroidPermissions = useCallback(async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, {
        title: "Permissão para usar localização",
        message:
          "Precisamos da sua permissão para exibir as lojas próximas a você",
        buttonPositive: "Confirmar",
      });

      if (result === RESULTS.GRANTED) {
        fetchAndroidLocation();
      }
    } catch (err) {
      // Error not handled
    }
  }, [fetchAndroidLocation]);

  useEffect(() => {
    if (productDetails === undefined && !isFetching) {
      fetchProductDetails(selectedProduct.id);
    }
  }, [fetchProductDetails, productDetails, selectedProduct.id, isFetching]);

  useEffect(() => {
    navigation.addListener("blur", () => {
      reset();
    });
  });

  useEffect(() => {
    if (
      permissionError === undefined &&
      currentLocation === undefined &&
      !isFetchingLocation
    ) {
      if (Platform.OS === "ios") {
        fetchiOSLocation();
      } else if (Platform.OS === "android") {
        fetchAndroidLocation();
      }
    }
  });

  useEffect(() => {
    if (Platform.OS === "ios") {
      requestiOSPermissions();
    } else if (Platform.OS === "android") {
      requestAndroidPermissions();
    }
  }, [requestiOSPermissions, requestAndroidPermissions]);

  const handleSetFavorite = async (): Promise<void> => {
    await setFavorite(selectedProduct.id);
  };

  return (
    <Details
      isFetching={isFetching}
      productDetails={productDetails}
      currentLocation={currentLocation}
      handleSetFavorite={handleSetFavorite}
      isFavLoading={isFavLoading}
      isFetchingLocation={isFetchingLocation}
    />
  );
};

export default DetailsContainer;
