import { observable, action, flow, runInAction } from 'mobx';
import Profile from './profile';

class UserStore {
  @observable.ref
  profile: Profile = new Profile();
}

export default new UserStore();
