import { AfterViewInit, Component, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef, inject } from "@angular/core";
import { ProductsComponent } from "./products/products.component";

@Directive({
    selector: '[inViewport]',
    standalone: true
})
export class InViewport implements AfterViewInit, OnDestroy {
    // private vc = inject(ViewContainerRef);
    // private tplRef = inject(TemplateRef<unknown>);
    private elRef = inject(ElementRef);

    // @Input('inViewport')
    // trigger!: HTMLElement;

    @Output()
    viewported: EventEmitter<void> = new EventEmitter();

    private observer!: IntersectionObserver;

    ngAfterViewInit() {
        this.observer = new IntersectionObserver((entries) => {
            const entry = entries[entries.length - 1];
            if (entry.isIntersecting) {
                // this.vc.createEmbeddedView(this.tplRef);
                this.viewported.emit();
                this.observer.disconnect();
            }
        });

        this.observer.observe(this.elRef.nativeElement)
    }

    ngOnDestroy(): void {
        this.observer.disconnect();
    }
}

@Component({
    selector: 'app-viewport',
    standalone: true,
    imports: [InViewport],
    template: `
        <h2>Load on Viewport</h2>
    
        <span inViewport (viewported)="onViewport()"></span>

        <ng-template #slot></ng-template>
    `,
})
export class Viewport { 
    @ViewChild('slot') slot!: TemplateRef<unknown>;
    private vc = inject(ViewContainerRef);

    onViewport() {
        import('./products/products.component').then((c) => {
            let cmp = this.vc.createComponent(c.ProductsComponent);
      
            this.slot.createEmbeddedView(cmp);
          });
    }
}