import { StorageManager } from '@aws-amplify/ui-react-storage';

import '@aws-amplify/ui-react/styles.css';

export const VIdeoStorageManager = () => {
  return (
    <StorageManager
      acceptedFileTypes={[
      'video/*',
      ]}
      path="protected/"
      maxFileCount={1}
      isResumable
    />
  );
};