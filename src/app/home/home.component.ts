import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => this.startCounterAnimation(), 500); // Ensure DOM is ready
  }

  startCounterAnimation() {
    const counters = document.querySelectorAll('[data-toggle="counter-up"]');
    
    counters.forEach((counter: Element) => {
      let target = parseFloat(counter.textContent || '0'); // Handles decimals
      if (isNaN(target) || target <= 0) return; // Skip invalid numbers

      let count = 0;
      let increment = Math.max(target / 100, 1); // Adjust speed (Min 1)
      let duration = 2000; // Total duration in ms
      let startTime: number | null = null;

      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        
        let currentCount = Math.min(target * (progress / duration), target);
        counter.textContent = Math.ceil(currentCount).toString();

        if (progress < duration) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString(); // Ensure final value
        }
      };

      requestAnimationFrame(updateCounter);
    });
  }
}
