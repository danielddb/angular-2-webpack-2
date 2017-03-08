import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as counter from '../actions/counter.actions';
import * as fromRoot from '../reducers';

interface AppState {
  counter: number;
}

@Component({
    selector: 'counter',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button (click)="increment()">Increment</button>
        <div>Current Count: {{ (counter$ | async).count }}</div>
        <button (click)="decrement()">Decrement</button>

        <button (click)="reset()">Reset Counter</button>
    `
})
export class CounterComponent {
    counter$: Observable<any>;

    constructor(private store: Store<fromRoot.State>){
        this.counter$ = store.select('counter');
    }

    increment(){
        this.store.dispatch(new counter.Increment(''));
    }

    decrement(){
        this.store.dispatch(new counter.Decrement(''));
    }

    reset(){
        this.store.dispatch(new counter.Reset(''));
    }
}