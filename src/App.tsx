import { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import type { Category } from "./types/types";
import { ProductCard } from "./components/ProductCard";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { CategoryTabs } from "./components/CategoryTab";
import { products } from "./data/Products";
import { categories } from "./data/Category";

export default function App() {
  const [activeCategories, setActiveCategories] = useState(categories);

  const handleCategorySelect = (selectedCategory: Category) => {
    setActiveCategories(
      activeCategories.map((category) => ({
        ...category,
        isActive: category.id === selectedCategory.id,
      }))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto bg-white">
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="flex items-center justify-between p-4 lg:px-8">
            <button className="rounded-full p-1 hover:bg-gray-100 lg:hidden">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold lg:text-2xl">Frutas</h1>
            <button className="rounded-full p-1 hover:bg-gray-100">
              <Search className="h-6 w-6" />
            </button>
          </div>
          <CategoryTabs
            categories={activeCategories}
            onSelect={handleCategorySelect}
          />
        </header>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <main className="container mx-auto p-4 lg:p-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </ScrollArea>
      </div>
    </div>
  );
}
