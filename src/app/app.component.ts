import {
  Component,
  OnDestroy,
  OnInit,
  WritableSignal,
  signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  animation: WritableSignal<string> = signal('pulse');
  contentLoaded: WritableSignal<boolean> = signal(false);
  count: WritableSignal<number> = signal(2);
  widthHeightSizeInPixels: WritableSignal<number> = signal(50);
  intervalId: number | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.contentLoaded.set(true);
    }, 2000);

    this.intervalId = window.setInterval(() => {
      this.animation.update((value) =>
        value === 'pulse' ? 'progress-dark' : 'pulse'
      );
      this.count.update((value) => (value === 2 ? 5 : 2));
      this.widthHeightSizeInPixels.update((value) => (value === 50 ? 100 : 50));
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

bootstrapApplication(AppComponent);
