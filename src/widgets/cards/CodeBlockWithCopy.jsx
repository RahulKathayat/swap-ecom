import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@material-tailwind/react';

const CodeBlockWithCopy = ({ codeString }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div>
      <CopyToClipboard text={codeString}
        onCopy={() => setIsCopied(true)}>
        <Button variant='outlined' color='teal' size='sm'>{isCopied ? "Copied!" : "Copy to Clipboard"}</Button>
      </CopyToClipboard>
      <SyntaxHighlighter language="javascript" style={oneDark} customStyle={{padding:"20px",borderRadius: "5px", backgroundColor: "#001E3C", minWidth:"70vh",maxWidth:"90vh",fontSize:"20px"}} >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlockWithCopy;