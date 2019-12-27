import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule
    ]
})
export class MaterialModule {

}
