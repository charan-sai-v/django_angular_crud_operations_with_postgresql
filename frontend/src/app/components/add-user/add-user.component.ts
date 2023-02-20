import { Component } from '@angular/core';
import { UserService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  
    constructor(private service: UserService, private router: Router) { }
  
    ngOnInit(): void {
    }

    data: any

    form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    });

    addUser() {
      this.data = this.form.value;
      this.service.addUser(this.data).subscribe(data => {
        // redirect to home page
        this.router.navigate(['/']);
      });
    }

    

    


}
