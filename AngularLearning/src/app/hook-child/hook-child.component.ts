import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.scss']
})
export class HookChildComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentChecked,
                                           AfterContentInit,AfterViewChecked,AfterViewInit {

  @Input() childCounter!: number;
  ngOnChanges(): void {
    console.log('child components on changes trigggered');
  }
  ngOnInit(): void {
    console.log('child initialized');
  }

  ngDoCheck(): void{
    console.log('child do check trigggered');
  }

  ngAfterViewInit():void{
    console.log('child component after view init called');
  }

  ngAfterViewChecked():void{
    console.log('child component after view checked called');
  }

  ngAfterContentInit():void{
    console.log('child component after content init called');

  }

  ngAfterContentChecked():void{
    console.log('child component after content checked called');
  }

  ngOnDestroy():void{
    console.log('child component destroyed');
    this.childCounter = 0;
  }
}
