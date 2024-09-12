import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (searchText: string | undefined) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(inputRef.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FaSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
