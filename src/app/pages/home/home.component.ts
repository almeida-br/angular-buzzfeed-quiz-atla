import { Component, OnInit } from '@angular/core';
import { QuizzComponent } from '../../components/quizz/quizz.component';
import { CommonModule } from '@angular/common';
import quizz_questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuizzComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../../styles.css']
})
export class HomeComponent implements OnInit{
  constructor(){
  }

  ngOnInit(): void {
    
  }

}
