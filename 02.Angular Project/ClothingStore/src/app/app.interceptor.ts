import { HttpInterceptorFn } from '@angular/common/http';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const API_CLOTHES = 'http://localhost:3030/data';
  const URL_START_CLOTHES = '/data';

  if(req.url.startsWith(URL_START_CLOTHES)){
    console.log(req.url);
    
    req = req.clone({
      url: req.url.replace(URL_START_CLOTHES, API_CLOTHES)
    })
  }
  

  return next(req);
};
