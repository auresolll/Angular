import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameStartComponent } from './game-start/game-start.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
  },
  {
    path: 'game-start',
    component: GameStartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
