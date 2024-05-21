import { getCollection } from "astro:content";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

type CategoryDropdownProps = {
  categories: string[];
};

export default function CategoryDropdown({
  categories,
}: CategoryDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Category dropdown</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {categories.map((category) => {
          return (
            <DropdownMenuItem
              key={category}
              className="justify-between capitalize"
            >
              {category}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
