import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService, Words} from '../services/dictionary.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionarydetail',
  templateUrl: './dictionarydetail.component.html',
  styleUrls: ['./dictionarydetail.component.css']
})
export class DictionarydetailComponent implements OnInit, OnDestroy {
  word: Words;
  sub: Subscription;

  constructor(private activatedRouter: ActivatedRoute,
              private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const keyDetail = paramMap.get('key');
      const mean = this.dictionaryService.search(keyDetail);
      this.word = {
        key: keyDetail,
        meaning: mean
      };
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
