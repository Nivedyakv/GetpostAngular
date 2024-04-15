import { Component, OnInit } from '@angular/core';
import { EmpService } from '../service/emp.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-patch',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,CommonModule],
  templateUrl: './patch.component.html',
  styleUrl: './patch.component.scss'
})
export class PatchComponent implements OnInit{
  form: any; // Define form property
  updateSuccessMessage: string | null = null;
  updateErrorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private todoService: EmpService) {}

  ngOnInit(): void {
    // Initialize form directly
    this.form = this.formBuilder.group({
      userId: ['', Validators.required],
      id: ['', Validators.required],
      title: ['', Validators.required],
      completed: [false, Validators.required]
    });
  }

  updateTodo() {
    if (this.form.valid) {
      const formData = this.form.value;
      const todoId = formData.id;

      this.todoService.patchTaskDetails(todoId, formData).subscribe(
        (response) => {
          this.updateSuccessMessage = 'Todo updated successfully';
          this.updateErrorMessage = null;
        },
        (error) => {
          this.updateErrorMessage = 'Error updating todo';
          this.updateSuccessMessage = null;
        }
      );
    } else {
      this.updateErrorMessage = 'Form is invalid. Please fill in all fields.';
    }
  }
}

