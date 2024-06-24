import {NgModule} from '@angular/core';
import {CustomTableComponent} from "./components/custom-table/custom-table.component";
import {CustomModalComponent} from "./components/modal-custom/custom-modal.component";
import {ValidationMessageComponent} from "./components/validation-message/validation-message.component";
import {LoadingComponent} from "./components/loading/loading.component";
import {PhonePipe} from "./utils/pipes/phone.pipe";
import {ActivePipe} from "./utils/pipes/active.pipe";
import {StatusPipe} from "./utils/pipes/status.pipe";
import {ANGULAR_IMPORTS} from "./imports/angular-imports";
import {PRIMENG_IMPORTS} from "./imports/primeng-imports";
import {CEPPipe} from "./utils/pipes/cep.pipe";
import {CNPJPipe} from "./utils/pipes/cnpj.pipe";
import {CPFPipe} from "./utils/pipes/cpf.pipe";
import {BlockableDivComponent} from "./components/blockable-div/blockable-div.component";
import {TopBarComponent} from "./components/top-bar/top-bar.component";

export const SHARED_MODULE_DECLARATIONS: any[] = [
  CustomTableComponent,
  CustomModalComponent,
  ValidationMessageComponent,
  LoadingComponent,
  BlockableDivComponent,
  TopBarComponent,
  PhonePipe,
  ActivePipe,
  StatusPipe,
  CEPPipe,
  CNPJPipe,
  CPFPipe,

];

export const SHARED_MODULE_PRIVATE_DECLARATIONS: any[] = [];

@NgModule({
  declarations: [
    SHARED_MODULE_DECLARATIONS,
    SHARED_MODULE_PRIVATE_DECLARATIONS
  ],
  imports: [
    ANGULAR_IMPORTS,
    PRIMENG_IMPORTS,
  ],
  exports: [
    SHARED_MODULE_DECLARATIONS,
    ANGULAR_IMPORTS,
    PRIMENG_IMPORTS
  ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptorService,
  //     multi: true
  //   }
  // ]
})
export class SharedModule {
}
