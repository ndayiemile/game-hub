import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "@/store";
const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order By : {currentSortOrder?.label || "Relevance"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSelectedSortOrder(order.value)}
            value={order.value}
          >
            {order.label}{" "}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
