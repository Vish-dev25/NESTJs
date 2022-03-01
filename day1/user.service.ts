import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  GetAllUser(): string[] {
    return ['Rahul', 'Sagar', 'vikrant'];
  }
  AddUser(): string {
    return 'User Added Successfully';
  }
  EditUser(): string {
    return 'User Updated Successfully';
  }
  DeleteUser(): string {
    return 'User Deleted.';
  }
}
