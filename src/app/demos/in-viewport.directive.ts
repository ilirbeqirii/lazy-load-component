import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output, inject } from "@angular/core";

@Directive({
    selector: '[inViewport]',
    standalone: true
})
export class InViewportDirective implements AfterViewInit, OnDestroy {
    private elRef = inject(ElementRef);

    @Output()
    inViewport: EventEmitter<void> = new EventEmitter();

    private observer!: IntersectionObserver;

    ngAfterViewInit() {
        this.observer = new IntersectionObserver((entries) => {
            const entry = entries[entries.length - 1];
            if (entry.isIntersecting) {
                this.inViewport.emit();
                this.observer.disconnect();
            }
        });

        this.observer.observe(this.elRef.nativeElement)
    }

    ngOnDestroy(): void {
        this.observer.disconnect();
    }
}