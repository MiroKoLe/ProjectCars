import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading: boolean = true;

  constructor(private _loading: LoadingService) {}

  ngOnInit() {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this._loading.loadingSub.pipe(delay(2)).subscribe((loading) => {
      this.loading = loading;
    });
  }
}
