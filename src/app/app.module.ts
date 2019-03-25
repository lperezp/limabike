/* IMPORT MATERIAL ANGULAR */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./module-material";

/* IMPORT MODULES ANGULAR */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CicloviaComponent } from "./components/ciclovia/ciclovia.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, CicloviaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
