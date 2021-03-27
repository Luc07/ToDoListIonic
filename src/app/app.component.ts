import { AppService } from './app.service';
import { Component } from '@angular/core';
import Task from './models/task'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tasks: Task[] = []

  newTask = new Task(null,null)

  enableEdit = false;
  constructor(
    private taskService: AppService
  ) {
    this.setTask()
  }

  private setTask(){
    this.taskService.getTask()
    .subscribe((response: Task[]) =>{
      this.tasks = response
    })
  }

  saveTask(){
    this.taskService.createTask(this.newTask)
    .subscribe((response) => {
      this.setTask();
    })
  }

  changeEdit(){
    this.enableEdit = !this.enableEdit;
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task.id)
    .subscribe((response) =>{
      this.setTask();
    })
  }
  
  editTask(task: Task){
    this.taskService.editTask(task)
    .subscribe((response) =>{
      this.setTask();
    })
  }

}