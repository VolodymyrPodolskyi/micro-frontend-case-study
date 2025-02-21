export interface BaseCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  title,
  children,
  className
}) => (
  <div className={clsx("card", className)}>
    <h3 className="card-title">{title}</h3>
    <div className="card-content">{children}</div>
  </div>
); 