import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ResponseCodeEnum } from 'src/app/data/enumerables';
import { UserRequestV1 } from 'src/app/data/schemas/request/user-request-v1';
import { UserResponseV1 } from 'src/app/data/schemas/response/user-response-v1';
import { UserService } from 'src/app/data/services/user.service';
import { SwalBasic } from 'src/app/helpers/swal-helper';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['fullName', 'actions'];
  dataSource = new MatTableDataSource<UserResponseV1>();

  userRequest: UserRequestV1 = new UserRequestV1();

  constructor(private userService: UserService) {}

  getByFilters() {
    this.userService.getByFilters(this.userRequest).subscribe((response) => {
      if (response.code === ResponseCodeEnum.CodigoExito) {
        this.dataSource = new MatTableDataSource<UserResponseV1>(
          response.listado,
        );
        this.dataSource.paginator = this.paginator;
      } else {
        SwalBasic(4, 'No records found', '');
      }
    });
  }

  cleanContent() {
    this.userRequest = new UserRequestV1();
    this.dataSource = new MatTableDataSource<UserResponseV1>();
  }

  enabled(id: number) {
    this.userService.enabled(id).subscribe((response) => {
      if (response.code === 0) {
        const msg = response.objeto.enabled
          ? 'User enabled successfully'
          : 'User disabled successfully';
        SwalBasic(1, msg, '');
      }
    });
  }
}

// ****************************IMPORTANT ****************************
// Start of table with server side pagination
// Not working on SQL Server 2008
// Replaced for client side pagination for this use case
// ******************************************************************

// import { Component, ViewChild } from '@angular/core';
// import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';
// import { PagedResult } from 'src/app/data/schemas/base/paged-result';
// import { UserRequestV1 } from 'src/app/data/schemas/request/user-request-v1';
// import { UserResponseV1 } from 'src/app/data/schemas/response/user-response-v1';
// import { UserService } from 'src/app/data/services/user.service';
// import { SwalBasic } from 'src/app/helpers/swal-helper';

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.scss'],
// })

// export class ListComponent {
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   userRequest: UserRequestV1 = new UserRequestV1();
//   userList: PagedResult<UserResponseV1> = new PagedResult<UserResponseV1>();

//   users: any[];
//   loading = false;
//   dataSource = new MatTableDataSource<any>();

//   title = 'pagination';

//   constructor(private userService: UserService) {}

//   getByFilters() {
//     this.userService
//       .getByFiltersPaginated(this.userRequest)
//       .subscribe((response) => {
//         this.users = response.objeto.results;
//         this.users.length = response.objeto.rowCount;

//         this.dataSource = new MatTableDataSource<any>(this.users);
//         this.dataSource.paginator = this.paginator;
//         this.loading = false;
//       });
//   }

//   getData(offset: number, limit: number) {
//     let newIndex = offset;
//     if (newIndex <= 0) {
//       newIndex++;
//     }
//     this.userRequest.page = newIndex;
//     this.userRequest.rowsPerPage = limit;
//     this.userService
//       .getByFiltersPaginated(this.userRequest)
//       .subscribe((response) => {
//         this.loading = false;
//         this.users = response.objeto.results;
//         this.users.length = response.objeto.rowCount;

//         this.dataSource = new MatTableDataSource<any>(this.users);
//         this.dataSource.paginator = this.paginator;
//       });
//   }

//   getNextData(currentSize: number, offset: number, limit: number) {
//     let newIndex = offset;
//     if (newIndex <= 0) {
//       newIndex++;
//     }
//     this.userRequest.page = newIndex;
//     this.userRequest.rowsPerPage = limit;
//     this.userService
//       .getByFiltersPaginated(this.userRequest)
//       .subscribe((response) => {
//         this.loading = false;

//         this.users.length = currentSize;
//         this.users.push(...response.objeto.results);

//         this.users.length = response.objeto.rowCount;

//         this.dataSource = new MatTableDataSource<any>(this.users);
//         this.dataSource._updateChangeSubscription();

//         this.dataSource.paginator = this.paginator;
//       });
//   }

//   pageChanged(event: PageEvent) {
//     this.loading = true;
//     let { pageIndex } = event;
//     const { pageSize } = event;
//     const previousSize = pageSize * pageIndex;
//     pageIndex++;
//     this.getNextData(previousSize, pageIndex, pageSize);
//   }

//   cleanContent() {
//     this.userRequest = new UserRequestV1();
//     this.userList = new PagedResult<UserResponseV1>();

//     this.users = [];
//     this.dataSource = new MatTableDataSource<any>();
//   }

//   enabled(id: number) {
//     this.userService.enabled(id).subscribe((response) => {
//       if (response.code === 0) {
//         const msg = response.objeto.enabled
//           ? 'User enabled successfully'
//           : 'User disabled successfully';
//         SwalBasic(1, msg, '');
//       }
//     });
//   }
// }
