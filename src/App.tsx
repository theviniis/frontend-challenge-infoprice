import { useState } from 'react'
import { useFetch } from './hooks'
import Loading from './components/Loading'
import UserCard from './components/UserCard'
import SearchUserForm from './components/SearchUserForm'
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage'

export type UserProps = {
  login: string
  name: string
  url: string
  avatar_url: string
  followers: number
  following: number
  public_repos: number
  html_url: string
  repos_url: string
}

function App() {
  const [username, setUsername] = useState<string>('')
  const { data, error, loading, request } = useFetch<UserProps>()

  async function getUserData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    return request(`https://api.github.com/users/${username}`)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div id="wrapper">
      <SearchUserForm onSubmit={(e) => getUserData(e)}>
        <SearchUserForm.Title>Test frontend - InfoPrice</SearchUserForm.Title>
        <SearchUserForm.Description>
          Enter a single Github username below and click the button to display
          profile info.
        </SearchUserForm.Description>
        <SearchUserForm.Input
          value={username}
          onChange={(e) => setUsername(e.target.value.toLocaleLowerCase())}
          autoFocus
        />
      </SearchUserForm>

      {data && (
        <UserCard>
          <UserCard.Header
            name={data.name}
            html_url={data.html_url}
            login={data.login}
          />
          <UserCard.Content
            html_url={data.html_url}
            avatar_url={data.avatar_url}
            login={data.login}
            followers={data.followers}
            following={data.following}
            public_repos={data.public_repos}
            repos_url={data.repos_url}
          />
        </UserCard>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
}

export default App
