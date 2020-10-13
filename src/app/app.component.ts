import { Component, OnInit } from '@angular/core';
import { IUserResponse } from './user/models/user';
import { UserManagerService } from './user/services/user-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testAngular';

  constructor(private userManagerService: UserManagerService) {}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    this.userManagerService.getPerson().subscribe((response: IUserResponse) => {
      console.log(response);
    });
  }
}
