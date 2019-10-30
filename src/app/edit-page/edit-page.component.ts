import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
  selector: 'edit-page'
})
export class EditPageComponent {

  constructor() {}

  ngOnInit() {}
}
