import { NgModule } from '@angular/core';
import {MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ]
})
export class MaterialModule {

}
