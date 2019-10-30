import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy
} from '@angular/core';

import {
  filter,
  takeUntil,
  map,
  pluck
} from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Observable, Subject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  selector: 'shared-edit-header'
})
export class EditHeaderComponent implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject();

  constructor() {}


  private buildHeaderItems() {
    return [
      {
        label: 'REQUEST TYPE',
        value: 'GOLD Submission'
      },
      {
        label: 'DEVELOPER',
        value: 'GAMELOFT'
      },
      {
        label: 'REQUEST ID',
        value: 5
      },
      {
        label: 'CURRENT STATUS',
        value: 'DRAFT'
      }
    ];
  }

  public ngOnDestroy() {
    this.destroy$.next(true);
  }
}
