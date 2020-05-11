import {Component, OnInit} from '@angular/core';
import {WordService} from './word.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidateFn} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  word: string;
  statusCheck = false;
  checkWord = '';
  synonymWord = '';
  public formcheckSynonym: FormGroup;
  constructor(private wordService: WordService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initLoginForm();
    this.getWord();
  }

  getWord() {
    this.wordService.getRandWord().subscribe(data => {
      this.word = data.mainWord;
      this.synonymWord = data.synonymWord;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  initLoginForm() {
    this.formcheckSynonym = this.formBuilder.group({
      synonymWord: ['', Validators.required]
    });
  }

  checkAnswer() {
    const result: any = Object.assign({}, this.formcheckSynonym.value);
    if (result.synonymWord.toLowerCase() === this.synonymWord.toLowerCase()){
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
