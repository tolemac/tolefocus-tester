import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {focusManager, focusObserver} from '../tolefocus';
focusManager.enable();
focusObserver.enable();

platformBrowserDynamic().bootstrapModule(AppModule);
