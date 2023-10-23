import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './header/header.component';
import { EditTaskComponent } from './task-list/edit-task/edit-task.component';
import { AddTaskComponent } from './task-list/add-task/add-task.component';
import { DeleteTaskComponent } from './task-list/delete-task/delete-task.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    SharedComponent,
    HeaderComponent,
    EditTaskComponent,
    AddTaskComponent,
    DeleteTaskComponent,
    NotificationsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
