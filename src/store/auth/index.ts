import {
  setAccessToken,
  getAccessToken,
  deleteAccessToken,
} from './../../utils/auth';
import { post } from './../../apis';
import { observable, action, flow, runInAction } from 'mobx';
import UserStore from '../user';

class AuthStore {
  @observable
  isAuthenticated: boolean = false;

  @observable
  accessToken: string = '';

  @observable
  isLoading: boolean = true;

  constructor() {
    getAccessToken().then((token) => {
      if (token) {
        runInAction(() => {
          this.isAuthenticated = true;
          this.accessToken = token;
        });
      }
    });
  }

  @action
  login = flow(function* (this: AuthStore, userInfo: any) {
    const result = yield post('/auth/login', userInfo);
    if (result) {
      setAccessToken(result.accessToken);
      this.isAuthenticated = true;
    }
  });

  @action
  logout = () => {
    deleteAccessToken();
    this.isAuthenticated = false;
  };
}

export default new AuthStore();
