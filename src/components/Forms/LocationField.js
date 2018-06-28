import React from 'react'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete'

class LocationField extends React.Component<any> {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }
    
    handleChange = address => {
        console.log('address:: ', address);
        
        this.setState({ address });
    };
    
    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => {
                console.log(JSON.stringify(results))
                return getLatLng(results[0])
            })
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };
    
    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                searchOptions={{
                    componentRestrictions: {country: "kh"}
                }}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div key={+new Date()} {...getSuggestionItemProps(suggestion, { className, style, })}>
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
            </PlacesAutocomplete>
        )
    }
}

export default LocationField

