import { Injectable } from '@nestjs/common';
import { ConsoleUtility } from '@vclerc/utility';

@Injectable()
export class AppService {

    private _consoleUtility: ConsoleUtility = new ConsoleUtility('tag');

    print() {
        this._consoleUtility.print('test-server');
    }

}
