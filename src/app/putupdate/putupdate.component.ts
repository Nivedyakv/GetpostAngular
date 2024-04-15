import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpService } from '../service/emp.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-putupdate',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './putupdate.component.html',
  styleUrl: './putupdate.component.scss'
})
export class PutupdateComponent implements   OnInit {
  formGroup!: FormGroup; 
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      userId: ['', Validators.required],
      id: ['', Validators.required],
      title: ['', Validators.required],
      completed: [false, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      // Handle form submission
      console.log('Form submitted successfully:', this.formGroup.value);
      this.submitted = true;
    } else {
      console.log('Form is invalid. Please fill in all fields.');
    }
  }
}