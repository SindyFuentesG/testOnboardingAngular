import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserManagerService } from './services/user-manager.service';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [UserManagerService],
})
export class UserModule {}
