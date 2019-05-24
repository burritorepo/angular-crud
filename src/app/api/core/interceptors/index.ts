import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
export const INTERCEPTORS_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
]
export * from './token.interceptor';