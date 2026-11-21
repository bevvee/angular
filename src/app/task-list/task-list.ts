import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe } from '@angular/common';
import { TitleColorPipePipe } from '../Pipe/title-color-pipe-pipe';

@Component({
  selector: 'app-task-list',
  imports: [UpperCasePipe, DatePipe, TitleColorPipePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  //tasks:{ id: number; title: string; description: string; dueDate?: string }[] = [];
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      completed: false,
      priority: 'medium',
      dueDate: '2026-11-14'
    }
  ];
}
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
}
