import { StorageManager } from '@aws-amplify/ui-react-storage';

import '@aws-amplify/ui-react/styles.css';

export const TextStorageManager = () => {
  return (
    <StorageManager
      acceptedFileTypes={[
      '.txt',
      ]}
      path="protected/"
      maxFileCount={1}
      isResumable
    />
  );
};