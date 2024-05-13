import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";

type Props = {
  textInput: string;
  setTextInput: (text: string) => void;
};

const SearchBar = ({ setTextInput, textInput }: Props) => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  return (
    <div className="bg-primary-200 dark:bg-primary-dark-200 mr-4 flex h-12 w-full flex-1 items-center justify-between rounded-md px-10 sm:h-14 sm:max-w-[480px] md:self-start">
      <FontAwesomeIcon icon={faSearch} />
      <input
        onChange={handleTextChange}
        className="bg-primary-200 dark:bg-primary-dark-200 w-5/6 border-hidden"
        type="text"
        placeholder="Search for a country..."
        value={textInput}
      />
    </div>
  );
};

export default SearchBar;
