import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    public dialog: MatDialog
    ){
    this.form = this.formBuilder.group({
        name: [null],
        category: [null]
    });
  }


  onSubmit(){
    this.service.save(this.form.value).subscribe(result => console.log(result),
    error =>{
    this.onError('Não foi possível adicionar o curso');
    }
  );
  }

  onCancel(){

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
