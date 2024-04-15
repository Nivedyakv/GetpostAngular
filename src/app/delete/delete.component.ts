import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpService } from '../service/emp.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent  implements OnInit {
  form!: FormGroup;
  deletionMessage: string = '';

  constructor(private fb: FormBuilder, private empService: EmpService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      todoId: ['', Validators.required]
    });
  }

  deleteTodo(): void {
    if (this.form) {
      const todoId = this.form.get('todoId')?.value;
      if (todoId) {
        this.empService.deleteTaskById(todoId).subscribe(
          () => {
            this.deletionMessage = `Todo with ID ${todoId} deleted successfully.`;
          },
          (error) => {
            this.deletionMessage = `Error deleting todo: ${error}`;
          }
        );
      } else {
        this.deletionMessage = 'Todo ID is null or undefined.';
      }
    } else {
      this.deletionMessage = 'Form is null or undefined.';
    }
  }
}