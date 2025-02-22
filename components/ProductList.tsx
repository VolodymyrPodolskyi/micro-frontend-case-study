// Single Responsibility Principle
const ProductList: React.FC<ProductListProps> = ({ products }) => (
  /* Only handles product display */
);

// Open/Closed Principle
const withAnalytics = <P extends object>(WrappedComponent: React.ComponentType<P>) => 
  (props: P) => {
    // Analytics logic
    return <WrappedComponent {...props} />;
  }; 