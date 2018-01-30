import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user;
  username;
  userList: string[];

ngOnInit(){
  this.username = [];
}
addUser() {
   this.username.push({
   user: this.user
  });
  this.user = ' ';
}

removeUser(user){
   this.username = this.username.splice(this.user,1);
}

}

