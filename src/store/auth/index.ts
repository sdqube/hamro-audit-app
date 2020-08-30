import { setAccessToken, getAccessToken } from './../../utils/auth';
import { post } from './../../apis/index';
import { observable, action, flow, runInAction } from 'mobx';

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
      setAccessToken(result.token);
      this.isAuthenticated = true;
    }
  });
}

export default new AuthStore();
