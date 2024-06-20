import { StorageManager } from '@aws-amplify/ui-react-storage';

import '@aws-amplify/ui-react/styles.css';

export const PDFStorageManager = () => {
  return (
    <StorageManager
      acceptedFileTypes={[
      '.pdf',
      ]}
      path="protected/"
      maxFileCount={1}
      isResumable
    />
  );
};