import { NgModule } from '@angular/core';
import {MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatFormFieldModule} from '@angular/material';

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
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class MaterialModule {

}
