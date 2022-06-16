import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ArrayComponent } from "./array/array.component";
import { SourceComponent } from "./source/source.component";
import { DOMComponent } from "./dom/dom.component";
import { FunctionsComponent } from "./functions/functions.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { OOPComponent } from "./oop/oop.component";
import { TypeDataComponent } from "./type-data/type-data.component";

const route: Routes = [
  {path:'type', component: TypeDataComponent},
  {path: '', component: MainContentComponent},
  {path: 'array', component: ArrayComponent},
  {path: 'functions', component: FunctionsComponent},
  {path: 'dom', component: DOMComponent},
  {path: 'source', component: SourceComponent},
  {path: 'oop', component: OOPComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(route, {preloadingStrategy: PreloadAllModules} )],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
