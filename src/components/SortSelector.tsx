import { Button, Menu, Portal } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (

    <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="outline" size="md">
              Order by: Relevance
              <BsChevronDown />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
  )
}

export default SortSelector