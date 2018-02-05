import React from 'react';

/**
 * A section creates a responsive container and single row
 * 
 * @argument borderTop - no value (boolean) attribute which adds a line at the top
 * @argument sectionColor - no value boolean attribute which colors the background for contrast
 * @argument sectionSpace - on value boolean attribute which adds more top and bottom padding
 * @argument children - the contents of the component are added into the row
 */
export default class Section extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {borderTop, sectionColor, sectionSpace, children} = this.props;
        const classes = [
            sectionSpace?"section-space":"", 
            borderTop?"bdr-top":"", 
            sectionColor?"section-color":""
        ].join(' ');
        return (
            <div className={classes}>
                <div className="container">
                    <div className="row">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}