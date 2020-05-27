import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WordService} from '../word.service';

@Component({
  selector: 'app-guesssynonymword',
  templateUrl: './guesssynonymword.component.html',
  styleUrls: ['./guesssynonymword.component.css']
})
export class GuesssynonymwordComponent implements OnInit {
  word: string;
  statusCheck = false;
  checkWord = '';
  synonym = '';
  public formcheckSynonym: FormGroup;
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
    this.formcheckSynonym = this.formBuilder.group({
      synonym: ['', Validators.required]
    });
  }

  checkAnswer() {
    const result: any = Object.assign({}, this.formcheckSynonym.value);
    if (result.synonym.toLowerCase() === this.synonym.toLowerCase()){
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
    this.formcheckSynonym.reset();
    this.getWord();
  }

}
