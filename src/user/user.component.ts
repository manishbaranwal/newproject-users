import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    user = '';
    username;
    alert: { message: '', 'type': '', show: false };
    userList: string[];

    ngOnInit() {
        this.alert = {message: '', 'type': '', show: false};
        this.username = ['manish'];
        this.showNoUserAlert();
    }

    addUser() {
        this.username.push(this.user.trim());
        this.user = '';
        this.showAlert('User added.', 'success');
    }

    isUser() {
        return !this.user.trim();
    }

    removeUser(user) {
        this.username.splice(this.username.indexOf(user), 1);
        if (!this.showNoUserAlert()) {
            this.showAlert('User deleted.', 'danger');
        }
    }

    showAlert(message, type) {
        type = 'alert-' + (type ? type : 'success');
        this.alert.message = message;
        this.alert['type'] = type;
        this.alert.show = true;
    }

    removeAlert() {
        this.alert.message = '';
        this.alert['type'] = '';
        this.alert.show = false;
    }

    showNoUserAlert() {
        if (!this.username.length) {
            this.showAlert('No existing user. Please add user.', 'warning');
            return true;
        }
        return false;
    }
}
