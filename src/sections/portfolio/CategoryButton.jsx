export default function CategoryButton({
  category,
  className,
  onChangeCategory,
}) {
  return (
    <button className={className} onClick={() => onChangeCategory(category)}>
      {category}
    </button>
  );
}
