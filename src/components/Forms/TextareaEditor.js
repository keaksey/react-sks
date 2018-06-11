import React from 'react'
import 'tinymce/tinymce';
// A theme is also required
import 'tinymce/themes/modern/theme';

import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/preview';

import TinyMCE from 'react-tinymce'

export default class TextareaEditor extends React.PureComponent{
    _root: null;
    handleEditorChange = () => {
        
    };
    
    render() {
        
        return (
            <TinyMCE
                content={this.props.content || ''}
                ref={(e) => this._root=e}
                config={{
                    menubar:false,
                    statusbar: false,
                    plugins: 'autolink link image lists preview',
                    toolbar: 'bold italic | alignleft aligncenter alignright'
                }}
                onChange={this.handleEditorChange}
            />
        )
    }
}