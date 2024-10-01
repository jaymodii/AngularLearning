import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnChanges {
  @Input() count!: number;
  messageString!: string;
  messageString2!: string;
  messageString3!: string;
  messageString4!: string;



  firstChange!: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    this.messageString = 'Previous value: ' + changes['count'].previousValue;
    this.messageString2 = 'Current value: ' + changes['count'].currentValue;
    this.messageString3 = 'First Change: ' + changes['count'].firstChange;
    this.messageString4 = 'Is First Change ? ' + changes['count'].isFirstChange();

    console.log(changes);
  }
}
