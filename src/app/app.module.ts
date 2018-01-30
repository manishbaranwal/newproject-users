import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppFilterPipe} from './app.filter.pipe';
import {UserComponent} from '../user/user.component';



@NgModule({
    declarations: [
        AppComponent,
        AppFilterPipe,
        UserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
