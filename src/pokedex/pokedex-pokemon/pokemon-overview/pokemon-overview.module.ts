import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonOverviewComponent } from './pokemon-overview.component';

@NgModule({
  declarations: [
    PokemonOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonOverviewComponent
  ]
})
export class PokemonOverviewModule { }
