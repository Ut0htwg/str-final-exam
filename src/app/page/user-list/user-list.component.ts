import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList$: Observable<User[]> = this.userService.userList$;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  onDelete(user: User): void {
    this.userService.remove(user).subscribe(
      () => {
        this.userService.getAll();
      }
    );
  }

}
