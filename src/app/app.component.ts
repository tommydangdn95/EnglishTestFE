import {Component, OnInit} from '@angular/core';
import {WordService} from './word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  word: any;
  sStatus = 'Cancel';
  iProgressMax = 100;
  iProgressValue = 0;
  cancel = false;
  constructor(private wordService: WordService) {
  }

  ngOnInit(): void {
    this.word = 'Ready?';
  }

  getWord() {
    this.wordService.getRandWord().subscribe(data => {
      this.word = data;
    }, error => {
      console.log(error);
    });
  }

  async Cancel() {
    this.sStatus = 'Inactive';
    this.cancel = true;
    this.iProgressValue = 0;
    this.word = 'Stopping...';
  }

  async Run() {
    this.sStatus = 'Running...';
    this.getWord();
    while (this.iProgressValue < this.iProgressMax) {
      await this.wait(1000);
      this.iProgressValue = this.iProgressValue + 20;
      if (this.iProgressValue === this.iProgressMax && !this.cancel) {
        this.getWord();
        this.iProgressValue = 0;
      }
      console.log(this.iProgressValue);
    }
    this.sStatus = 'Complete';
    this.word = 'Ready?';
    this.resetState();
  }

  wait(ms: number)  {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  resetState() {
    this.iProgressValue = 0;
    this.cancel = false;
  }
}
