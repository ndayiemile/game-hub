import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "@/store";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
        navigate("/");
      }}
    >
      <InputGroup w="full" startElement={<BsSearch />}>
        <Input ref={ref} borderRadius={20} placeholder="search games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
