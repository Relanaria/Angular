import { Component, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { ThemeComponent } from "./theme/theme.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PostComponent, ThemeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
