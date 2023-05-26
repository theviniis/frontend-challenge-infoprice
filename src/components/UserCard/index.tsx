import React from 'react'
import { Content } from './Content'
import { Header } from './Header'

function UserCard({ children }: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return <div>{children}</div>
}

UserCard.Content = Content
UserCard.Header = Header

export default UserCard
