import AsyncStorage from "@react-native-async-storage/async-storage";
import {Token} from "src/models/token";
import {User} from "src/models/user";

export class Storage {
  private readonly tokenKey = "token";
  private readonly userKey = "user";

  public getToken = async (): Promise<Token | undefined> => {
    try {
      const data = await AsyncStorage.getItem(this.tokenKey);

      if (data !== null) {
        const token = JSON.parse(data) as Token;

        return token;
      }
    } catch (err) {
      // Error not handled
    }
  };

  public setToken = async (token: Token): Promise<void> => {
    try {
      const parsedToken = JSON.stringify(token);

      await AsyncStorage.setItem(this.tokenKey, parsedToken);
    } catch (err) {
      // Error not handled
    }
  };

  public getUser = async (): Promise<User | undefined> => {
    try {
      const data = await AsyncStorage.getItem(this.userKey);

      if (data !== null) {
        const user = JSON.parse(data) as User;

        return user;
      }
    } catch (err) {
      // Error not handled
    }
  };

  public setUser = async (user: User): Promise<void> => {
    try {
      const parsedUser = JSON.stringify(user);

      await AsyncStorage.setItem(this.userKey, parsedUser);
    } catch (err) {
      // Error not handled
    }
  };

  public reset = async (): Promise<void> => {
    try {
      await AsyncStorage.multiRemove([this.tokenKey, this.userKey]);
    } catch (err) {
      // Error not handled
    }
  };
}
