import {Injectable} from '@angular/core';

export interface Words {
  key: string;
  meaning: string;
}

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  public words: Words[] = [
    {key: 'dog', meaning: 'Con Chó'},
    {key: 'cat', meaning: 'Con Mèo'},
    {key: 'black', meaning: 'Màu Đen'},
    {key: 'sky', meaning: 'Bầu Trời'},
    {key: 'blue', meaning: 'Màu Xanh Da Trời'},
    {key: 'green', meaning: 'Màu Xanh Lá Cây'},
  ];

  constructor() {
  }

  search(word: string): string {
    if (!word) {
      return '';
    }
    const wordValue = this.words.find(item => item.key === word.toLowerCase());
    if (wordValue) {
      return wordValue.meaning;
    }
    return 'Not found';
  }

  getAll(): Words[] {
    return this.words;
  }
}
