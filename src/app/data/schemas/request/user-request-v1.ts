import { ScheduleRequestV1 } from './schedule-request-v1';

export class UserRequestV1 {
  userName: string;
  password: string;
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  fullName: string;
  userCode: string;
  schedule: ScheduleRequestV1 = new ScheduleRequestV1();

  // not mapped
  page: number;
  rowsPerPage: number;
  adminUserName: string;
  adminPassword: string;

  public constructor() {
    this.page = 1;
    this.rowsPerPage = 5;
  }
}
