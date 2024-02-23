import { CommonModule } from '@angular/common';
import { Component, OnInit, numberAttribute } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit{

  questions:any
  title:string=""
  questionIndex:number=0
  curQuestion:any

  correctAnswers:number=0
  questionQuant:number=0

  result:string=''
  resultStat:string=''
  resultImg:string=''

  constructor(){

  }

  ngOnInit(): void {
    if(quizz_questions){
      this.title=quizz_questions.title

      this.questions=quizz_questions.questions
      this.curQuestion=this.questions[this.questionIndex]

      this.questionQuant=this.questions.length
    }
  } 

  chooseOption(input:number){
    //this.answers.push(input)
    this.correctAnswers+=input
    console.log(this.correctAnswers);
    this.questionIndex++
    this.curQuestion=this.questions[this.questionIndex]
    if(this.questionIndex==this.questions.length){
      this.calculateResult(this.correctAnswers,this.questionQuant)
    }
  }

  calculateResult(input:number,quant:number){
    this.resultStat=`Respostas certas ${input}/${quant} `
    if(input<quant/2){
      this.result=`Não é um número ruim, mas não custa nada reassistir a série`
      this.resultImg="./assets/images/gif-atla.gif"
    }else{
      this.result=`Parabéns você é fã o suficiente pra concordar que: "Não existe filme de Avatar em Ba Sing Se"`
      this.resultImg="./assets/images/Joo_Dee.png"
    }
  }
}
