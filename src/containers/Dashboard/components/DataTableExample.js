import React from 'react'
import {
    DataTable
} from '@shopify/polaris'

import { Link } from './../../../components'

export default class DataTableExample extends React.Component {
  render() {
    const rows = [
      [<Link to="/your/products/9090" key={+new Date()}>{'Emerald Silk Gown'}</Link>, '$875.00', 124689, 140, '$122,500.00'],
      ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
      [
        'Navy Merino Wool Blazer with khaki chinos and yellow belt',
        '$445.00',
        124518,
        32,
        '$14,240.00',
      ],
    ];

    return (
      <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
        />
    );
  }
}