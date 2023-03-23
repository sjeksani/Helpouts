import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EmptyComponent } from "./empty.component";

describe('EmptyComponent', () => {
    let fixture: ComponentFixture<EmptyComponent>;
    let component: EmptyComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
        declarations: [EmptyComponent]
    });

    fixture = TestBed.createComponent(EmptyComponent);
    component = fixture.componentInstance;
});

it('should create the component', () => {
    expect(component).toBeDefined();
})
});