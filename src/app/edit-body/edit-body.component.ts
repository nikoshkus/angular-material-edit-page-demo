import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edit-body.component.html',
  styleUrls: ['./edit-body.component.scss'],
  selector: 'shared-edit-body'
})
export class EditBodyComponent {

  constructor() {}

  ngOnInit() {}
}
