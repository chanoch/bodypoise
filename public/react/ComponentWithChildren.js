class ComponentWithChildren extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    isChildTypeName(element, typeName) {
        return element&&element.type&&element.type.name===typeName;
    }

    getChildOfType(typeName) {
        const {children} = this.props;
        if(children) {
            if(Array.isArray(children)) {
                return children.find((child) => {
                    return this.isChildTypeName(child, typeName);
                });
            } else {
                return this.isChildTypeName(children, typeName)?children:"";
            }
        }
        return "";
    }
}