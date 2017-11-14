import { GeneratedSet } from '../shared/generatedset';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-generator',
  templateUrl: './numbers-generator.component.html',
  styleUrls: ['./numbers-generator.component.css']
})
export class NumbersGeneratorComponent implements OnInit {

  @Input() generatedSet: GeneratedSet;

  constructor() { }

  ngOnInit() {
  }

}
