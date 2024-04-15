import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PostformComponent } from './postform/postform.component';
import { PutupdateComponent } from './putupdate/putupdate.component';
import { DeleteComponent } from './delete/delete.component';
import { PatchComponent } from './patch/patch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DetailsComponent,PostformComponent,PutupdateComponent,DeleteComponent,PatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular14getpost';
  
}
