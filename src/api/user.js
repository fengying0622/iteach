import { Http } from '../util/http';

export const userLogin = (params)=>Http.post('oauth/token',params);