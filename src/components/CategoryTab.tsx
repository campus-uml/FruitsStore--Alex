import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { cn } from "../lib/utils";
import type { Category } from "../types/types";

interface CategoryTabsProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

export function CategoryTabs({ categories, onSelect }: CategoryTabsProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap border-b ">
      <div className="flex w-max space-x-6 px-4 py-3 ">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect(category)}
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-colors",
              category.isActive
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="h-2" />
    </ScrollArea>
  );
}
