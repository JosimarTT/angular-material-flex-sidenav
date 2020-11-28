import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleRequestV1 } from 'src/app/data/schemas/request/schedule-request-v1';
import { UserResponseV1 } from 'src/app/data/schemas/response/user-response-v1';
import { ScheduleService } from 'src/app/data/services/schedule.service';
import { UserService } from 'src/app/data/services/user.service';
import { SwalBasic } from 'src/app/helpers/swal-helper';
import {
  deleteSecondsPart,
  getOfficeHours,
  getScheduleFormated,
  SecondsToTimeSpan,
  timeSpanToSeconds,
} from 'src/app/helpers/time-span-helper';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  userResponse: UserResponseV1 = new UserResponseV1();
  scheduleRequest: ScheduleRequestV1 = new ScheduleRequestV1();
  schedule = '';
  officeHours = '';
  startOfOfficeHours = '';
  newOfficeHours = '';
  newValidationSpan = '';
  fullName = '';
  newStartOfficeHours = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private scheduleService: ScheduleService,
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.userService.getById(id).subscribe((response) => {
      if (response.code === 0) {
        this.userResponse = response.objeto;
        this.setTimes();

        this.scheduleRequest.userId = id;
        this.scheduleRequest.scheduleId = response.objeto.schedule.scheduleId;
      }
    });
  }

  edit() {
    this.scheduleRequest.startTime = this.newStartOfficeHours;
    this.scheduleRequest.officeTime = this.newOfficeHours;
    this.scheduleRequest.validationSpan = timeSpanToSeconds(
      this.newValidationSpan,
    );
    this.scheduleService.update(this.scheduleRequest).subscribe((response) => {
      if (response?.code === 0) {
        SwalBasic(1, 'Updated!', 'The information has been saved');
        this.userResponse.schedule = response.objeto;
        this.setTimes();
      } else {
        SwalBasic(
          2,
          'An unexpected error occurred',
          'Contact your administrator',
        );
      }
    });
  }

  setTimes() {
    this.schedule = getScheduleFormated(
      this.userResponse.schedule.startTime,
      this.userResponse.schedule.endTime,
    );
    this.officeHours = getOfficeHours(
      this.userResponse.schedule.startTime,
      this.userResponse.schedule.endTime,
    );
    this.startOfOfficeHours = deleteSecondsPart(
      this.userResponse.schedule.startTime,
    );
    this.newStartOfficeHours = deleteSecondsPart(
      this.userResponse.schedule.startTime,
    );
    this.newOfficeHours = getOfficeHours(
      this.userResponse.schedule.startTime,
      this.userResponse.schedule.endTime,
    );
    this.newValidationSpan = SecondsToTimeSpan(
      this.userResponse.schedule.validationSpan,
    );
  }
}
