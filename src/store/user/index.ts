import { observable, action, flow } from 'mobx';
import Profile from './profile';
import { get } from '../../apis';

class UserStore {
  @observable
  isFetched: boolean = false;

  @observable.ref
  profile: Profile = new Profile();

  @action
  fetchUser = flow(function* (this: UserStore) {
    const result = yield get('/auth/users/sagarduwal');
    if (result) {
      this.profile.update(result);
    }
  });
}

export default new UserStore();
