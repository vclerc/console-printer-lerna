import { ConsoleWrapper } from '@vclerc/console-wrapper';

export class ConsoleUtility {
    private readonly _tag: string;
    private readonly _consoleWrapper: ConsoleWrapper;

    constructor(tag: string) {
        this._tag = tag;
        this._consoleWrapper = new ConsoleWrapper();
    }

    public print(content: string) {
        this._consoleWrapper.print(`[${this._tag}]-${content}`);
    }
}
