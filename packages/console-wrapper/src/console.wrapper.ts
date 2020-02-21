export class ConsoleWrapper {
    public print(content: string) {
        console.log('\x1b[33m%s\x1b[0m', `Printing: ${content}`);
    }
}
