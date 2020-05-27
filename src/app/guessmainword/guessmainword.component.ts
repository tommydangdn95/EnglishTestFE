import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WordService} from '../word.service';

@Component({
  selector: 'app-guessmainword',
  templateUrl: './guessmainword.component.html',
  styleUrls: ['./guessmainword.component.css']
})
export class GuessmainwordComponent implements OnInit {
  word: string;
  statusCheck = false;
  checkWord = '';
  synonym = '';
  public formcheckMainWord: FormGroup;
  constructor(private wordService: WordService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initLoginForm();
    this.getWord();
  }

  getWord() {
    this.wordService.getRandWord().subscribe(data => {
      this.word = data.name;
      if (data.synonym) {
        this.synonym = data.synonym;
      }
      else{
        this.synonym = data.mean;
      }
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  initLoginForm() {
    this.formcheckMainWord = this.formBuilder.group({
      word: ['', Validators.required]
    });
  }

  checkAnswerMainWord() {
    const result: any = Object.assign({}, this.formcheckMainWord.value);
    if (result.word.toLowerCase() === this.word.toLowerCase()){
      this.checkWord = 'Correct';
      this.statusCheck = true;
    }
    else {
      this.checkWord = 'Wrong';
      this.statusCheck = false;
    }
  }

  nextWord() {
    this.checkWord = '';
    this.formcheckMainWord.reset();
    this.getWord();
  }

}
