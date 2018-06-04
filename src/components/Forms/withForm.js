// @flow
import React from 'react'
import PropTypes from 'prop-types'

import {
    reduxForm,
    getFormSubmitErrors, 
    startSubmit, 
    stopSubmit 
} from 'redux-form'

import { connect } from 'react-redux'

type FromProps = {
    form: string
};

type ReduxProps = {
    mapStateToProps?: PropTypes.func
};

type Props = {
    dispatch: PropTypes.func
};

const withForm = (formProps: FromProps, reduxProps: ReduxProps) => 
    (Component: any) => {
        class HOC extends React.PureComponent<Props> {
            
            startSubmit = () => {
                this.props.dispatch(startSubmit(formProps.form));
            }
            
            stopSubmit = (errors: any = null) => {
                this.props.dispatch(stopSubmit(formProps.form, {errors}));
            }
            
            render() {
                return <Component {...this.props} 
                    startSubmit={this.startSubmit} 
                    stopSubmit={this.stopSubmit}
                />
            }
        }
        
        HOC.displayName = `withForm(${Component.displayName || Component.name})`;
        
        // eslint-disable-next-line
        HOC = reduxForm({...formProps})(HOC)
        
        const mapStateToProps = (state) =>{
            
            let stateTopProps = {
                formErrors: getFormSubmitErrors(formProps.form)(state)
            }
            
            if ( reduxProps && reduxProps.mapStateToProps ){
                stateTopProps = {
                    ...stateTopProps,
                    ...reduxProps.mapStateToProps(state)
                }
            }
            
            return stateTopProps;
        }
        
        return reduxProps === null ? HOC : connect(mapStateToProps)(HOC)
    }

export default withForm