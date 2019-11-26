import { Component, ViewChild, AfterViewInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSelect, MatInput } from '@angular/material';

import { Subject, ReplaySubject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

interface Item {
  id: number;
  name: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './task-template.component.html',
  styleUrls: ['./task-template.component.scss'],
  selector: 'task-template'
})
export class TaskTemplateComponent implements OnDestroy, AfterViewInit {
  @ViewChild('singleSelect', { read: MatSelect, static: false }) singleSelect : MatSelect

  /** control for the selected bank */
  public ggiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public ggiFilterCtrl: FormControl = new FormControl();

  /** control for the selected bank for multi-selection */
  public lpMultiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public lpMultiFilterCtrl: FormControl = new FormControl();

  /** list of banks */
  private ggi: Item[] = [
    {name: '72329 Android Generic ', id: 72329},
    {name: '71465 iOS Generic', id: 71465},
    {name: '79175 Android', id: 79175}
  ];

  /** list of banks */
  private lp: Item[] = [
    {name: 'Yuriy Boltyan ', id: 1},
    {name: 'Maxim Ivanov', id: 2},
    {name: 'Smith Smithson', id: 3}
  ]

  public title= '';

  /** list of banks filtered by search keyword */
  public filteredGGI: ReplaySubject<Item[]> = new ReplaySubject<Item[]>(1);

  /** list of banks filtered by search keyword for multi-selection */
  public filteredLpMulti: ReplaySubject<Item[]> = new ReplaySubject<Item[]>(1);

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();
  
  public requiredFormControl: FormControl = new FormControl('titleInput', [
    Validators.required
    ]
  );

  public requiredSubFormControl: FormControl = new FormControl('subtitleInput', [
    Validators.required
    ]
  );

  public selectFormControl: FormControl = new FormControl('selectInput', [
    Validators.required
    ]
  );
  

  ngOnInit() {
    this.requiredFormControl.setValue('');
    this.requiredFormControl.markAsTouched();

    this.requiredSubFormControl.setValue('');
    this.requiredSubFormControl.markAsTouched();

    this.selectFormControl.setValue(null);
    this.selectFormControl.markAsTouched();
    // set initial selection
    this.ggiCtrl.setValue(this.ggi[1]);
    this.lpMultiCtrl.setValue(this.lp.slice(0,2));

    // load the initial bank list
    this.filteredGGI.next(this.ggi.slice());
    this.filteredLpMulti.next(this.lp.slice());

    // listen for search field value changes
    this.ggiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterGGI();
      });
    this.lpMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterLpMulti();
      });

  }

  private getItems() {
    return this.lpMultiCtrl.value.map(item => item.name).join(', ');
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  private setInitialValue() {
    this.filteredGGI
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: Item, b: Item) => a.id === b.id;
      });
  }

  private filterGGI() {
    if (!this.ggi) {
      return;
    }
    // get the search keyword
    let search = this.ggiFilterCtrl.value;
    if (!search) {
      this.filteredGGI.next(this.ggi.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredGGI.next(
      this.ggi.filter(ggi => ggi.name.toLowerCase().indexOf(search) > -1)
    );
  }

  private filterLpMulti() {
    if (!this.lp) {
      return;
    }
    // get the search keyword
    let search = this.lpMultiFilterCtrl.value;
    if (!search) {
      this.filteredLpMulti.next(this.lp.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredLpMulti.next(
      this.lp.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }
}
