import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchBoxModule } from "../../search/search-box/search-box.module";
import { NavBarComponent } from "./nav-bar.component";

@NgModule({
    declarations: [NavBarComponent],
    imports: [SearchBoxModule, CommonModule],
    exports: [NavBarComponent]
})

export class NavBarModule {}