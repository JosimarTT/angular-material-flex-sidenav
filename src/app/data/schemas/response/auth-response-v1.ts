import { UserResponseV1 } from './user-response-v1';

export class AuthResponseV1 {
  accessToken: string;
  tokenType: string;
  user: UserResponseV1;
}
