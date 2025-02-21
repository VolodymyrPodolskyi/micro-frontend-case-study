export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { product, ...rest } = props;
  
  return (
    <BaseCard
      title={product.name}
      className="product-card"
      {...rest}
    >
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <span>{product.price}</span>
    </BaseCard>
  );
}; 