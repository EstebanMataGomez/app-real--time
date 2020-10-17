import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navigation-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  //Variable declarations
  @Input() empresa: string;
  @Input() anio: number;
  @Input() isBold: boolean = false; 

  ngOnInit(): void {
  }

}
