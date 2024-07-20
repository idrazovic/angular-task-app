import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        UserComponent,
        TasksComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    users = DUMMY_USERS;
    selectedUser = this.users[0];

    onSelectUser(id: string) {
        const user = this.users.find(user => user.id === id);
        this.selectedUser = user ?? this.users[0];
    }
}
