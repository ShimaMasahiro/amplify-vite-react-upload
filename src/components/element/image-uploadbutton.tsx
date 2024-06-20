import { StorageManager } from '@aws-amplify/ui-react-storage';

import '@aws-amplify/ui-react/styles.css';

export const ImageStorageManager = () => {
  return (
    <StorageManager
      acceptedFileTypes={[
      '.gif',
      '.bmp',
      '.jpeg',
      '.jpg',
      'image/png',
      ]}
      path="protected/"
      maxFileCount={1}
      isResumable
    />
  );
};