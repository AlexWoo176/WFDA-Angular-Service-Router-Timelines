import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'noGATyh3JAA', song: 'Tiếng gọi - Trần Lập - 2016'},
    {id: 'GjLDHcitDnw', song: 'Cơn Mưa Tháng 5 - Tùng Dương & Trần Lập | Official MV'},
    {id: '3vXTeiuv070', song: 'Tình yêu tôi hát ft. Hồng Nhung II [Lam Trường 9PM Live]'},
    {id: 'CBpyz1R2ah4', song: 'Lãng quên chiều thu II [Lam Trường 9PM LIVE]'},
    {id: 'B2w0-cw-6Uw', song: 'Về Đâu Mái Tóc Người Thương - Quang Lê'},
    {id: 'utj0ukyAXjk', song: 'Quang Lê - Sương Trắng Miền Quê Ngoại'},
    {id: 'YlDKXh5T7oc', song: 'Quang Lê - Xuân Này Con Về Mẹ Ở Đâu?'},
    {id: 'WGL48v-yTy4', song: 'Quang Lê - Cay Đắng Bờ Môi'},
    {id: 'zeZKyTiBiSQ', song: 'Quang Lê - Đập Vỡ Cây Đàn (Hoa Linh Bảo)'},
    // {id: 'utj0ukyAXjk', song: 'Quang Lê - Sương Trắng Miền Quê Ngoại'},
    // {id: 'utj0ukyAXjk', song: 'Quang Lê - Sương Trắng Miền Quê Ngoại'},
    // {id: 'utj0ukyAXjk', song: 'Quang Lê - Sương Trắng Miền Quê Ngoại'}
  ];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
