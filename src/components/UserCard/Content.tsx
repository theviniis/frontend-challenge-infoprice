import { UserProps } from '../../App'
import { RepositoriesList, RepoListProps } from './RepositoriesList'

type UserContentProps = Pick<
  UserProps,
  | 'html_url'
  | 'avatar_url'
  | 'login'
  | 'followers'
  | 'following'
  | 'public_repos'
> &
  RepoListProps &
  React.HtmlHTMLAttributes<HTMLDivElement>

export function Content({
  html_url,
  avatar_url,
  login,
  followers,
  following,
  public_repos,
  repos_url,
  ...props
}: UserContentProps) {
  return (
    <div {...props}>
      <div className="avi">
        <a href={html_url} target="_blank">
          <img src={avatar_url} width="80" height="80" alt={login} />
        </a>
      </div>
      <p>
        Followers: {followers} - Following: {following}
        <br />
        Repos: {public_repos}
      </p>

      <RepositoriesList repos_url={repos_url} />
    </div>
  )
}
