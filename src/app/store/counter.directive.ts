import {
    Directive,
    ViewContainerRef,
    TemplateRef,
    Input,
    Attribute,
    SimpleChange
} from '@angular/core';

@Directive({
    selector: "[counterOf]"
})
export class CounterDirective {

    @Input('counterOf')
    counter: number;

    constructor(private  container: ViewContainerRef, private template: TemplateRef<Object>) {

    }

    ngOnChanges(changes: SimpleChange) {
        this.container.clear();
        for (let i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    }
}

class CounterDirectiveContext {
    constructor(public  $implict: any) {}
}
