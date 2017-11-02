import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [GlobalService]
})
export class ListComponent implements OnInit {

  public games: any = [
    { title: 'Power ball' , description: 'some text', picture: '../../../assets/images/powerball.png' },
    { title: 'Power ball' , description: 'some text', picture: '../../../assets/images/oz_lotto.png' },
    { title: 'Power ball' , description: 'some text', picture: '../../../assets/images/saturday-lotto.png' },
    { title: 'Power ball' , description: 'some text', picture: '../../../assets/images/powerball.png' },
    { title: 'Power ball' , description: 'some text', picture: '../../../assets/images/oz_lotto.png' },
    { title: 'Power ball' , description: 'some text', picture: '../../../assets/images/saturday-lotto.png' },
    { title: 'Power ball' , description: 'some text', picture: '../../../assets/images/powerball.png' },
    { title: 'Power ball' , description: 'some text', picture: '../../../assets/images/oz_lotto.png' },
    { title: 'Power ball' , description: 'some text', picture: '../../../assets/images/saturday-lotto.png' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
