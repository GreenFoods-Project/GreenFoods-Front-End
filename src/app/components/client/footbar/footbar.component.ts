import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.css']
})
export class FootbarComponent {
  @Input() isDarkMode = true;
}
