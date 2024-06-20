/**
 * File: stc/App.tsx
 * Author: SHIMA Masahiro
 * Created Date: 2024-06-19
 * Last Modified: 2024-06-19
 */

import { Authenticator } from '@aws-amplify/ui-react'

import '@aws-amplify/ui-react/styles.css'

import {DefaultStorageManagerExample } from '../src/components/element/uploadbutton';

function App() {

  return (
    <Authenticator>
      {({ signOut }) => (
    <main>
      <h1>upload</h1>
      <div>
        <button onClick={signOut}>Sign out </button>
        <DefaultStorageManagerExample/>
      </div>
    </main>
      )}
    </Authenticator>
  );
}

export default App;