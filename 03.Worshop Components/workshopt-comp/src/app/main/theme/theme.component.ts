import { Component, OnInit } from '@angular/core';
import { Theme } from '../../types/theme';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent implements OnInit {
  themes: Theme[] = []

  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {   
    this.apiService.getThemes().subscribe((themes) =>{
      this.themes = themes;
    })
  }
}
