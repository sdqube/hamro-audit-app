import { observable, action, flow, runInAction } from 'mobx';

class Profile {
  update(userData: any) {
    console.log(userData);
  }
}

export default Profile;
