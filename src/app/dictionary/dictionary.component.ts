import {Component, OnInit} from '@angular/core';
import {DictionaryService, Words} from '../services/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word: Words;

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
  }

  search(word: string) {
    const mean = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: mean
    };
  }
}
