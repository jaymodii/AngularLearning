import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-function',
  templateUrl: './arrow-function.component.html',
  styleUrls: ['./arrow-function.component.scss']
})
export class ArrowFunctionComponent {

    @Input() name: string = '';  // Correct placement of @Input() decorator



    // greet() {
    //     setTimeout(function() {
    //         console.log(`Hello, my name is ${this.name}`);
    //         // `this` will not refer to the ArrowFunctionComponent instance, but to the global context.
    //     }, 1000);
    // }

    greetArrow() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
            // `this` correctly refers to the ArrowFunctionComponent instance, as arrow functions retain the outer context.
        }, 1000);
    }
}

// Example usage:
// const component = new ArrowFunctionComponent("Alice");
// component.greet();       // Incorrect: `this.name` will be undefined or refer to the global context
// component.greetArrow();  // Correct: `this.name` refers to "Alice"
