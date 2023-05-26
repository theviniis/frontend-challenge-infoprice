import { useEffect } from 'react'
import { useFetch } from '../../hooks'
import Loading from '../Loading'
import styles from './UserCard.module.css'

export type RepoListProps = {
  repos_url: string
}

export type RepositoryProps = {
  name: string
  clone_url: string
}

export function RepositoriesList({ repos_url = '' }: RepoListProps) {
  const { data, loading, request } = useFetch<RepositoryProps[]>()

  useEffect(() => {
    request(repos_url)
  }, [repos_url, request])

  if (!data) {
    return <p>No repos!</p>
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className={styles.repolist}>
      <p>
        <strong>Repos List:</strong>
      </p>
      <ul>
        {data.map((repo) => (
          <li key={`${repo.name}-${crypto.randomUUID()}`}>
            <a href={repo.clone_url} target="_blank">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
