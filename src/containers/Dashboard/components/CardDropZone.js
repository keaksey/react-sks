// @flow
import React from 'react'
import PropTypes from 'prop-types'

import {
    Thumbnail,
    Stack,
    DropZone,
    Caption,
    Card
} from '@shopify/polaris'

type State = {
    files: PropTypes.array,
    openFileDialog: bool
};
class CardDropZone extends React.Component<{}, State> {
  constructor(props: any) {
      super(props);
      
      this.state = {
          files: [],
          openFileDialog: false
      }
  }
  
  render() {
    const { files, openFileDialog } = this.state;
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    
    const uploadedFiles = files.length > 0 && (
      <Stack vertical>
        {files.map((file, i) => (
          <Stack alignment="center" key={i}>
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
      <Card title="Images" actions={[{
          content: 'Upload Image',
          onAction: () => {
              this.setState({openFileDialog: true});
          }
        }]}
      >
        <Card.Section>
          <DropZone
            openFileDialog={openFileDialog}
            onDrop={(files) => {
              this.setState({files: [...this.state.files, ...files]});
            }}
            onFileDialogClose={() => {
              this.setState({openFileDialog: false});
            }}
          >
            {uploadedFiles}
          </DropZone>
        </Card.Section>
      </Card>
    );
  }
}

export default CardDropZone