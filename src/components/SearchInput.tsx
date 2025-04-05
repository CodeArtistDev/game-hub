import { Input, InputGroup } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'


const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
    <Input placeholder='Search Games...' borderRadius={20} variant='outline'/>
    </InputGroup>
  )
}

export default SearchInput