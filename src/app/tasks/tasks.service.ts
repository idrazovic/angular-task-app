import { Injectable } from '@angular/core';

import { NewTaskData } from './task/task.model';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Task 1',
            summary: 'Task 1 summary',
            dueDate: '2022-01-01',
        },
        {
            id: 't2',
            userId: 'u2',
            title: 'Task 1',
            summary: 'Task 1 summary',
            dueDate: '2022-01-01',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Task 1',
            summary: 'Task 1 summary',
            dueDate: '2022-01-01',
        },
    ];

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().toISOString(),
            userId: userId,
            ...taskData
        });
        this.saveTasks();
    }

    deleteTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
