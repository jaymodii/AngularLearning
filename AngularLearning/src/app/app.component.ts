import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularLearning';
  count: number = 0;
  showHooksComponent: boolean = true;

  increment(): void {
    this.count++;
  }

  toggleHooksComponent() {
    this.showHooksComponent = !this.showHooksComponent;
    this.count = 0;
  }

}

