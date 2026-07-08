import * as vscode from 'vscode';
import { textReverseDot } from './functions/textReverseDot';
import { textReverseHandler } from './functions/textReverseHandler';

export function activate(context: vscode.ExtensionContext) {

    const disposables: vscode.Disposable[] = [
        vscode.commands.registerCommand('@text-reverse/dot', textReverseHandler(textReverseDot)),
    ];

    context.subscriptions.push(...disposables);




}

export function deactivate() {}
