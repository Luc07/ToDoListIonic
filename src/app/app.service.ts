import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Task from './models/task';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'http://localhost:3000/tasks'

  constructor(
    private httpClient: HttpClient
  ) { }

  getTask(){
    return this.httpClient.get(this.url)
  }
  createTask(task: Task){
    return this.httpClient.post(this.url, task)
  }
  editTask(task: Task){
    return this.httpClient.put(`${this.url}/${task.id}`, task)
  }
  deleteTask(taskId: Number){
    return this.httpClient.delete(`${this.url}/${taskId}`)
  }
}
