function CategoryItem({ category: { id, title, image, href } }) {
  return (
    <a
      href={href}
      className="flex flex-col group gap-y-2 items-center text-center p-4 transition hover:bg-purple-50"
    >
      <img
        src={image}
        alt={title}
        className="w-12 rounded border border-gray-200"
      />
      <span className="text-sm font-semibold whitespace-nowrap text-gray-700 group-hover:text-brand-color tracking-tight">
        {title}
      </span>
    </a>
  );
}

export default CategoryItem;
