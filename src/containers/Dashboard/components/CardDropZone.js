// @flow
import React from 'react'
import PropTypes from 'prop-types'

import {
    Thumbnail,
    Stack,
    DropZone,
    Caption
} from '@shopify/polaris'

type State = {
    files: PropTypes.array
};
class CardDropZone extends React.Component<{}, State> {
  constructor(props: any) {
      super(props);
      
      this.state = {
          files: []
      }
  }
  render() {
    const {files} = this.state;
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

    const fileUpload = !files.length && <DropZone.FileUpload />;
    const uploadedFiles = files.length > 0 && (
      <Stack vertical>
        {files.map((file, i) => (
          <Stack alignment="center" key={+new Date()}>
            <Thumbnail
              size="small"
              alt={file.name}
              source={
                validImageTypes.indexOf(file.type) > 0
                  ? window.URL.createObjectURL(file)
                  : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
              }
            />
            <div>
              {file.name} <Caption>{file.size} bytes</Caption>
            </div>
          </Stack>
        ))}
      </Stack>
    );
    
    return (
      <DropZone
        onDrop={(files) => {
          this.setState({files: [...this.state.files, ...files]});
        }}
      >
        {uploadedFiles}
        {fileUpload}
      </DropZone>
    );
  }
}

export default CardDropZone