import React, {
  ReactElement,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import {ActivityIndicator} from 'react-native';
import {Screen} from 'src/components/screen/screen.native';
import {Storage} from 'src/utils/storage';
import {User} from 'src/models/user';
import {Token} from 'src/models/token';
import {AuthContext} from 'src/contexts/auth/auth-provider';
import AppProviders from 'src/app-providers';
import {EventMediator} from 'src/utils/events';
import {EventTypes} from 'src/utils/event-types';

const AppAuthContainer = (): ReactElement => {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<Token>();
  const [isLoading, setLoading] = useState(false);
  const storage = useMemo(() => new Storage(), []);

  const handleSetUser = async (newUser: User): Promise<void> => {
    try {
      await storage.setUser(newUser);

      setUser(newUser);
    } catch (err) {
      // Error not handled
    }
  };

  const handleSetToken = async (newToken: Token): Promise<void> => {
    try {
      await storage.setToken(newToken);

      setToken(newToken);
    } catch (err) {
      // Error not handled
    }
  };

  const handleReset = useCallback(async (): Promise<void> => {
    try {
      setToken(undefined);
      setUser(undefined);

      await storage.reset();
    } catch (err) {
      // Error not handled
    }
  }, [storage]);

  const getToken = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);

      const storageToken = await storage.getToken();

      setToken(storageToken);
      setLoading(false);
    } catch (err) {
      // Error not handled
    }
  }, [storage]);

  const getUser = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);

      const storageUser = await storage.getUser();

      setUser(storageUser);
      setLoading(false);
    } catch (err) {
      // Error not handled
    }
  }, [storage]);

  useEffect(() => {
    if (token === undefined) {
      getToken();
    }
  }, [token, getToken]);

  useEffect(() => {
    if (user === undefined) {
      getUser();
    }
  }, [user, getUser]);

  useEffect(() => {
    EventMediator.subscribe({
      name: EventTypes.LOGOUT,
      handler: handleReset,
    });

    return () =>
      EventMediator.unsubscribe({
        name: EventTypes.LOGOUT,
        handler: handleReset,
      });
  }, [handleReset]);

  if (isLoading) {
    return (
      <Screen>
        <ActivityIndicator size="large" />
      </Screen>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        setUser: handleSetUser,
        token: token?.token,
        user,
        setToken: handleSetToken,
        reset: handleReset,
      }}>
      <AppProviders />
    </AuthContext.Provider>
  );
};

export default AppAuthContainer;
