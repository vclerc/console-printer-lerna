export class ConsoleWrapper {
    public print(content: string) {
        console.log('\x1b[3m%s\x1b[0m', `Currently printing: ${content}`);
    }
}
