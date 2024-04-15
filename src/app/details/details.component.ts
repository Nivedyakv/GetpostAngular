import { Component } from '@angular/core';
import { EmpService } from '../service/emp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface tasksDetails{
userId:number,
id:number,
title:string,
completed:boolean
}

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  tasksDetails:tasksDetails[]=[]
  allDetails:tasksDetails[]=[]
  userInputId!:number;

constructor(private EmpService:EmpService){}
   showTasks(){
    this.EmpService.getTaskDetails().subscribe((res:any)=>{
      this.tasksDetails=res;
    })
   }
  search(){
    this.EmpService.getTaskDetails().subscribe((res: any)=>{
      this.allDetails=res;
      this.tasksDetails=this.allDetails.filter(task=>task.userId === Number(this.userInputId));
    })
  }
}
