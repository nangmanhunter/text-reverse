import * as vscode from 'vscode';

export function textReverseHandler(character: string){
   return () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      
      editor.edit(editBuilder => {
        for (const selection of editor.selections) {
          const text = editor.document.getText(selection);

          const replaced = text.split(character).reverse().join(character);
          
          editBuilder.replace(selection, replaced);
        }
      });
    }
}