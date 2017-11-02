import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  // lotto api url
  apiUrl = 'lotto-api.com';
  facebookApiIde = '493709554340952';

  // application data
  public applicationUsername = 'adolfo';
  public applicationPassword = 'adminadmin';
  public applicationClientId = '1W9ndvikkB3R4AEDMAswscsubyODKxDJYD9RqrHh';
  public applicationClientSecret = 'eX67SlNBC2R4E19cmJoWjx3hwkXpUaqL2U1RwbOmUzcUxxDRZjfaCjzfSZTXkzcrYxhvVRCMwrIxH7nEmSSNvPCn6QI8MWWkmvCOh7OCo4JYINpsS1XCHY1xBlgkHsLK';
  public applicationGrantType = 'password';

  constructor() { }

}
