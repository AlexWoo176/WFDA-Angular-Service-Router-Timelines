import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../services/dictionary.service';

@Component({
  selector: 'app-dictionarypage',
  templateUrl: './dictionarypage.component.html',
  styleUrls: ['./dictionarypage.component.css']
})
export class DictionarypageComponent implements OnInit {

  constructor(public dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }

}
