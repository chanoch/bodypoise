import React from 'react';

export default class ImageBlock extends React.Component {
    constructor(props) {
        super(props);
        context: props.context;
    }

    render() {
        const {img, alttext} = this.props;
        return (
            <div className="col-md-6"><img src={img} alt={alttext} className="img-fluid" /></div>
          )
    }
}
