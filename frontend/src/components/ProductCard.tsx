import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import type { Product } from "../data/products";

interface Props {
  product: Product;
}

const fmt = (n: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    n,
  );

const ProductCard = ({ product }: Props) => {
  const [added, setAdded] = useState(false);
  const { addItem } = useCartStore();

  const discount = Math.round(
    (1 - product.price / product.originalPrice) * 100,
  );

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20 hover:shadow-xl">
      {/* Ảnh */}
      <div className="relative aspect-square overflow-hidden bg-white/5">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-indigo-500 px-2 py-0.5 text-[11px] font-semibold text-white">
            {product.badge}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded bg-red-500 px-2 py-0.5 text-[11px] font-bold text-white">
          -{discount}%
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="line-clamp-2 text-sm font-medium text-white/90 leading-snug">
          {product.name}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-amber-400">
            {"★".repeat(Math.floor(product.rating))}
          </span>
          <span className="font-semibold text-amber-400">{product.rating}</span>
          <span className="text-white/30">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Giá */}
        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <p className="text-base font-bold text-indigo-400">
              {fmt(product.price)}
            </p>
            <p className="text-xs text-white/30 line-through">
              {fmt(product.originalPrice)}
            </p>
          </div>

          {/* Nút thêm giỏ */}
          <button
            onClick={handleAdd}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition
              ${added ? "bg-green-500" : "bg-indigo-500 hover:bg-indigo-400"}`}
          >
            {added ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
