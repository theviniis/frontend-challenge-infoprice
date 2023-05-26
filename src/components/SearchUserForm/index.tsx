import { Description } from './Description'
import { Title } from './Title'
import { Input } from './Input'
import React, { ReactNode } from 'react'

export type SearchUserFormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  children: ReactNode
}

function SearchUserForm({ onSubmit, children }: SearchUserFormProps) {
  return <form onSubmit={onSubmit}>{children}</form>
}

SearchUserForm.Title = Title
SearchUserForm.Description = Description
SearchUserForm.Input = Input

export default SearchUserForm
