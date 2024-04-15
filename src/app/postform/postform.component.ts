import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpService } from '../service/emp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-postform',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './postform.component.html',
  styleUrl: './postform.component.scss'
})
export class PostformComponent implements OnInit {
  form: FormGroup;
  response: string = '';
  savedTask: any;
  fetchedTasks: any[] = [];

  constructor(private formBuilder: FormBuilder, private empService: EmpService) {
    this.form = this.formBuilder.group({
      userId: [''],
      taskTitle: [''],
      completed: ['']
    });
  }


  ngOnInit() {
    
    this.getTaskDetails();
  }

  onSubmit() {
    const formData = this.form.value;
    this.empService.postTaskDetails(formData).subscribe((res: any) => {
      this.response = 'Data saved successfully!';
      this.savedTask = res; 
      this.fetchedTasks.unshift(this.savedTask); 
    });
  }

  getTaskDetails() {
    this.empService.getTaskDetails().subscribe((res: any) => {
      this.fetchedTasks = res;
    });
  }
}