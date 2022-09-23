import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { List } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/#' },
  { name: 'Sobre', href: '/#about' },
  { name: 'Serviços', href: '/#services' },
  { name: 'Entre em contato', href: '/contact' },
]

export function Header() {
  const navigate = useNavigate()
  return (
    <header className="flex justify-between mx-4 sm:mx-10 md:mx-auto max-w-6xl py-2 items-center">
      <div>
        <h1 className="text-2xl text-blue-900 font-bold">OceanFront Piscinas</h1>
      </div>
      <div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="md:hidden">
            <List className="text-blue-900" size={32} />
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="center"
              className="bg-blue-500 mr-5 mt-2 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center text-blue-900"
            >
              {navigation.map((navItem) => {
                return (
                  <>
                    <DropdownMenu.Item>
                      <a href={navItem.href}>{navItem.name}</a>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                  </>
                )
              })}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <nav className="hidden md:flex gap-4 text-blue-900 font-bold z-50">
          <a>Home</a>
          <a>Sobre</a>
          <a>Serviços</a>
          <a>Contato</a>
        </nav>
      </div>
    </header>
  )
}
