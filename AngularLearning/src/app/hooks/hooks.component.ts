import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy {
  @Input() count!: number;
  @ViewChild('viewChildElement', { static: false }) viewChildElement!: ElementRef;
  @ViewChild('viewChildElement2', { static: false }) viewChildElement2!: ElementRef;
  messageString!: string;
  messageString2!: string;
  messageString3!: string;
  messageString4!: string;
  changeCounter: number = 0;
  viewCheckedCounter: number = 0;
  data!: string;
  showHooksChildComponent: boolean = true;
  childCounter: number = 0;
  startCounter: boolean = true;
  firstChange!: boolean;
  subscription!: Subscription;

  // called after each change in bounded parameters of component
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    this.messageString = 'Previous value: ' + changes['count'].previousValue;
    this.messageString2 = 'Current value: ' + changes['count'].currentValue;
    this.messageString3 = 'First Change: ' + changes['count'].firstChange;
    this.messageString4 = 'Is First Change ? ' + changes['count'].isFirstChange();

    console.log(changes);
  }

  // called on initialization of component
  // called once, after the component's first change detection cycle
  ngOnInit() {
    // Simulate fetching data
    this.data = 'Data fetched on component initialization';
    console.log("ngOnInit called");
    this.restart();

  }

  // called after every change detection cycle
  ngDoCheck(): void {
    console.log('Change detection triggered. ngDoCheck called');
    this.changeCounter++;
  }

  // called after Angular projects external content into the component's view
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  // called after every change detection cycle to detect changes of the projected content
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    this.childCounter++;
  }

  // called after Angular has fully initialized the component's view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    setTimeout(() => {
      console.log('Changing ViewChild element background color after delay');
      this.viewChildElement.nativeElement.style.backgroundColor = 'yellow';
    }, 3000);
  }

  //  called after every change detection cycle to detect changes of component's view or child views
  ngAfterViewChecked(): void {
    this.viewCheckedCounter++;
    console.log('ngAfterViewChecked called, counter:', this.viewCheckedCounter);
    if (this.viewCheckedCounter % 2 === 0) {
      this.viewChildElement2.nativeElement.style.backgroundColor = 'lightgreen';
    } else {
      this.viewChildElement2.nativeElement.style.backgroundColor = 'pink';
    }
    console.log('Current background color:', this.viewChildElement2.nativeElement.style.backgroundColor);
  }

  // called when component is removed from DOM
  ngOnDestroy(): void {
    console.log('ngOnDestroy called , hooks component destroyed');
    this.subscription.unsubscribe();
    this.count = 0;
    this.childCounter = 0;
    this.data = '';
    this.changeCounter = 0;
  }

  pauseResumeCounter(): void {
    if (this.startCounter) {
      this.pause();
    } else {
      this.restart();
    }
    this.startCounter = !this.startCounter;
  }

  pause(): void {
    this.subscription.unsubscribe();
  }

  restart(): void {
    this.subscription = interval(2000).subscribe(() => console.log('Observable running'));
  }

  toggleHooksChildComponent(): void {
    this.showHooksChildComponent = !this.showHooksChildComponent;
    this.childCounter = 0;
  }
}
