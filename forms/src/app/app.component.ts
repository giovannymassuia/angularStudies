import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMessage = '';

  userModel = new User('', 'rob@test.com', 1234567980, 'default', 'morning', true);

  constructor(private _enrollService: EnrollmentService) {}

  validateTopic(value){
    if(value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(userForm){
    console.log(userForm);
    /*this.submitted = true;
    this._enrollService.enroll(this.userModel)
    .subscribe(
      data => console.log('Sucess!', data),
      error => this.errorMessage = error.statusText
    );
    */  }

}
