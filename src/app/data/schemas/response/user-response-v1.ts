import { ScheduleResponseV1 } from './schedule-response-v1';
import { TimerResponseV1 } from './timer-response-v1';
import { ValidationResponseV1 } from './validation-response-v1';

export class UserResponseV1 {
  userId: number;
  userName: string;
  userCode: string;
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  fullName: string;
  postalAddress: string;
  physicalAddress: string;
  email: string;
  phoneNumber1: string;
  phoneNumber2: string;
  roleId: number;
  schedule: ScheduleResponseV1;
  timers: TimerResponseV1[];
  validations: ValidationResponseV1[];
  enabled: boolean;
}
