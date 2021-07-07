import React from 'react'

class LodgmentList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.lodgments.map(lod => (<li key={lod.id} >{lod.title}</li>))}
            </ul>
        )
    }
}

export default LodgmentList