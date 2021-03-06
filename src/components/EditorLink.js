import LinkButton from './LinkButton.js';

export default function EditorLink({ $target }) {
  const $editorLink = document.createElement('div');
  $editorLink.classList.add('edit-page__link');
  $target.appendChild($editorLink);

  this.makeSubLinks = (document) => {
    if (document.documents.length) {
      $editorLink.innerHTML = 'π νμλ¬Έμ ';

      document.documents.forEach((subDocument) => {
        new LinkButton({
          $target: $editorLink,
          initialState: subDocument,
        });
      });
    } else {
      $editorLink.innerHTML = '';
    }
  };
}
