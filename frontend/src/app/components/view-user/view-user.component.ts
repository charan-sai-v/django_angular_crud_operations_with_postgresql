import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from '../../app.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  users: any | undefined;

  constructor(private userService: UserService) { 
   
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data)
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
