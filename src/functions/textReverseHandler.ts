import * as vscode from 'vscode';

export function textReverseHandler(textReversefunction: any){
   return () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      
      editor.edit(editBuilder => {
        for (const selection of editor.selections) {
          const text = editor.document.getText(selection);

          const replaced = textReversefunction(text);
          
          editBuilder.replace(selection, replaced);
        }
      });
    }
}