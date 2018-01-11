class BdrTop extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        var { children } = this.props; 
        return (
            <div className="bdr-top">
                <div className="container">
                    <div className="row">
                    {children}
                    </div>
                </div>
            </div>
        )
    }
}