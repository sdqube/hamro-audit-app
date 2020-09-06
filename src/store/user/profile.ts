import { observable, action, flow, runInAction } from 'mobx';

class Profile {
  @observable
  id: string = '';

  @observable
  displayName: string = '';

  @observable
  profilePictureUrl: string = '';

  @observable
  addresses: string = '';

  @observable
  roles: any = {};

  update(userData: any) {
    this.id = userData.id;
    this.displayName = userData.userProfile?.displayName;
    this.profilePictureUrl = userData.userProfile?.profilePictureUrl;
    this.update = userData.userProfile?.addresses;
    this.roles = userData.roles;
  }
}

export default Profile;
