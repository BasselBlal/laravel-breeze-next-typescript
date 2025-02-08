import { Menu, MenuItem } from '@headlessui/react'
import Link, { LinkProps } from 'next/link'
import { ComponentProps, ReactNode } from 'react'

interface DropdownLinkProps extends LinkProps {
  children: ReactNode
}

interface DropdownButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

const DropdownLink = ({ children, ...props }: DropdownLinkProps) => (
  <MenuItem>
    {({ focus }) => (
      <Link
        {...props}
        className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
          focus ? 'bg-gray-100' : ''
        } focus:outline-none transition duration-150 ease-in-out`}>
        {children}
      </Link>
    )}
  </MenuItem>
)

export const DropdownButton = ({ children, ...props }: DropdownButtonProps) => (
  <MenuItem>
    {({ focus }) => (
      <button
        className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
          focus ? 'bg-gray-100' : ''
        } focus:outline-none transition duration-150 ease-in-out`}
        {...props}>
        {children}
      </button>
    )}
  </MenuItem>
)

export default DropdownLink
