import React from 'react';

export default class ContentBlock extends React.Component {
    constructor(props) {
        super(props);
        context: props.context;
    }

    render() {
        const {title, content} = this.props;
        return (
            <div className="col-md-offset-1 col-md-5 padding-top60">
                <h1>{title}</h1>
                {content.map((item) => {
                    return <p key={item.key}>{item.text}</p>
                })}
            </div>
          )
    }
}
