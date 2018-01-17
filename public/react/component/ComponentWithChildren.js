/**
 * Provides descendants which extend this class with utility methods to find
 * child components of a given type.
 */
class ComponentWithChildren extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    isChildTypeName(element, typeName) {
        return element&&element.type&&element.type.name===typeName;
    }

    /**
     * Returns the first child component which has the name given as argument. Returns 
     * undefined if no child found.
     * 
     * @param {string} typeName - the name of the child component.
     * @returns the first child component found
     */
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
        return undefined;
    }

    /**
     * Returns an array of children with the class name given as argument.
     * 
     * @param {string} typeName - the name of the child components to find
     * @returns - all the children components with the given name or undefined if none found.
     */
    getChildrenOfType(typeName) {
        const {children} = this.props;
        if(children) {
            if(Array.isArray(children)) {
                return children.filter((child) => {
                    return this.isChildTypeName(child, typeName);
                });
            } else {
                return this.isChildTypeName(children, typeName)?[children]:undefined;
            }
        }
        return undefined;
    }    
}