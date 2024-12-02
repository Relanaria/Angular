import { HttpInterceptorFn } from '@angular/common/http';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const API_CLOTHES = 'http://localhost:3030/data';
  const URL_START_CLOTHES = '/data';

  const API_USER = 'http://localhost:3030/users';
  const URL_START_USER = '/users';

  if(req.url.startsWith(URL_START_CLOTHES)){
    req = req.clone({
      url: req.url.replace(URL_START_CLOTHES, API_CLOTHES),

    })
  }

  if(req.url.startsWith(URL_START_USER)){
    req = req.clone({
      url: req.url.replace(URL_START_USER, API_USER),
    })
  }
  

  return next(req);
};
