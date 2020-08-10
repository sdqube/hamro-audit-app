import { observable, action, flow } from 'mobx';

class AuthStore {
  @observable
  isAuthenticated: boolean = false;

  @observable
  isLoading: boolean = true;

  @action
  login() {
    this.isAuthenticated = true;
  }
}

export default new AuthStore();
