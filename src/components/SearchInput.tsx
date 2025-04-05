import { Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value)
    }}>
    <InputGroup startElement={<BsSearch />}>
    <Input ref={ref} placeholder='Search Games...' borderRadius={20} variant='outline'/>
    </InputGroup>
    </form>
  )
}

export default SearchInput