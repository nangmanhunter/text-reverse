import * as vscode from 'vscode';
import { textReverseUnitDot } from './functions/textReverseUnitDot';
import { textReverseHandler } from './functions/textReverseHandler';

export function activate(context: vscode.ExtensionContext) {

    const disposables: vscode.Disposable[] = [
        vscode.commands.registerCommand('@text-reverse/dot', textReverseHandler(textReverseUnitDot)),
    ];

    context.subscriptions.push(...disposables);




}

export function deactivate() {}
