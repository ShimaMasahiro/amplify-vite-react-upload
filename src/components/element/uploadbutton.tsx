// インストール済 $ npm add @aws-amplify/ui-react-storage aws-amplify
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { signUp } from "aws-amplify/auth";


// ファイルの内容をハッシュ化してユニークなキーを生成し、メタデータを追加する関数
const processFile = async ({ file }) => {
  // ファイル拡張子を取得
  const fileExtension = file.name.split('.').pop();
  const fileSize = file.size; // ファイルサイズを取得
  //const userEmail = await getUserEmail(); // ユーザーのメールアドレスを取得

  return file
    // ファイルをArrayBufferに変換
    .arrayBuffer() 
    // ファイル内容をSHA-1でハッシュ化
    .then((filebuffer) => window.crypto.subtle.digest('SHA-1', filebuffer)) 
    .then((hashBuffer) => {
      // ハッシュ値をバイト配列に変換
      const hashArray = Array.from(new Uint8Array(hashBuffer)); 
      const hashHex = hashArray
        .map((a) => a.toString(16).padStart(2, '0'))
        // バイト配列を16進数文字列に変換
        .join(''); 
      // ユニークなキーを持つオブジェクトとメタデータを返す
      return { 
        file, 
        key: `${hashHex}.${fileExtension}`, 
        metadata: {
          id: `${hashHex}.${fileExtension}`, // キー
          fileSize: fileSize, // ファイルサイズ
        },
      }; 
    });
};

// ファイルアップロードエラー時のハンドラー
const handleUploadError = (error: string, file: { key: string }) => {
  console.error(`ファイルのアップロードでエラーが発生しました。 ${file.key}: ${error}`);
  //alert(`ファイルのアップロードでエラーが発生しました。 ${file.key}: ${error}`);
};

// ファイルアップロード成功時のハンドラー
const handleUploadSuccess = (file: { key: string }) => {
  console.log(`ファイルのアップロードに成功しました。 ${file.key}`);
  //alert(`ファイルのアップロードに成功しました。 ${file.key}`);
};

// StorageManagerコンポーネントの例
export const DefaultStorageManagerExample = () => {
  return (
    <StorageManager
      acceptedFileTypes={[
        // 許可されるファイル拡張子リスト
        '.gif',
        '.bmp',
        '.doc',
        '.jpeg',
        '.jpg',
        // またはMIMEタイプ
        'image/png',
        'video/*',
      ]}
      path="protected/" // アップロードパス
      maxFileCount={1} // 最大ファイル数
      maxFileSize={100000000000} // 最大ファイルサイズ
      isResumable // アップロードの再開が可能
      autoUpload={false} // 自動アップロードを無効化
      processFile={processFile} // ファイル処理関数を指定
      onUploadError={handleUploadError} // アップロードエラーハンドラーを指定
      onUploadSuccess={handleUploadSuccess} // アップロード成功ハンドラーを指定
      displayText={{
        // some text are plain strings
        dropFilesText: 'ドラッグ&ドロップ',
        browseFilesText: 'ファイルを選択する',
        uploadSuccessfulText: 'アップロード完了',
        // others are functions that take an argument
        getFilesUploadedText(count) {
          return `${count}個のファイルのアップロードに成功しました`;
        },
    }}
    />
  );
};
