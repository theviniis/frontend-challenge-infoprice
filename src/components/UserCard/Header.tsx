import { UserProps } from '../../App'

export type HeaderProps = Pick<UserProps, 'name' | 'html_url' | 'login'> &
  React.HtmlHTMLAttributes<HTMLHeadingElement>

export function Header({ name, html_url, login, ...props }: HeaderProps) {
  return (
    <h2 {...props}>
      {name}
      <span className="smallname">
        {' '}
        (@
        <a href={html_url} target="_blank">
          {login}
        </a>
        )
      </span>
    </h2>
  )
}
