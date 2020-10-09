import React, { useEffect} from 'react';
import  { Smurf }  from './smurf';
import { fetchSmurfs } from '../store/actions';
import { connect } from 'react-redux';

const Smurfs = (props) => {
    useEffect(() => {
        props.fetchSmurfs()
    }, [])
    if(props.updated) {
        props.fetchSmurfs()
    };

    return (
        <div>
            {props.smurfData.map(smurf => {
                return (
                    <Smurf 
                    name = {smurf.name}
                    height = {smurf.height}
                    age = {smurf.age}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfData: state.smurfData
    }
}

export default connect(mapStateToProps, {fetchSmurfs}) (Smurfs)
