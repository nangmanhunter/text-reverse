import * as vscode from 'vscode';
import { textReverseHandler } from './functions/textReverseHandler';

export function activate(context: vscode.ExtensionContext) {

    const disposables: vscode.Disposable[] = [
        vscode.commands.registerCommand('@text-reverse/dot', textReverseHandler(".")),
        vscode.commands.registerCommand('@text-reverse/dot-middle', textReverseHandler("ㆍ")),
        vscode.commands.registerCommand('@text-reverse/hyphen', textReverseHandler("-")),
        vscode.commands.registerCommand('@text-reverse/plus', textReverseHandler("+")),
        vscode.commands.registerCommand('@text-reverse/equal', textReverseHandler("=")),
        vscode.commands.registerCommand('@text-reverse/nonequal', textReverseHandler("≠")),
        vscode.commands.registerCommand('@text-reverse/space', textReverseHandler(" ")),
        vscode.commands.registerCommand('@text-reverse/colon', textReverseHandler(":")),
    ];

    context.subscriptions.push(...disposables);

}

export function deactivate() {}
