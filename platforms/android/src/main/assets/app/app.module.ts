import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { Components,Routes } from './app.routing'
import { NativeScriptRouterModule } from 'nativescript-angular/router'
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, ...Components],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(Routes)
    ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
