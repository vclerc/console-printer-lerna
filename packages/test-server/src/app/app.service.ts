import { Injectable } from '@nestjs/common';
import { ConsoleUtility } from '@vclerc/utility';

@Injectable()
export class AppService {

    private _consoleUtility: ConsoleUtility = new ConsoleUtility('main');

    print() {
        this._consoleUtility.print('test-server - main server - test3');
    }

}
