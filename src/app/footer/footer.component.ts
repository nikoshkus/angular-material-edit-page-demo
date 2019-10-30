import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  selector: 'shared-edit-footer'
})
export class EditFooterComponent {  

  constructor() {}

  ngOnInit() {}
}
