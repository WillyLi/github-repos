import { render, screen } from '@testing-library/react'
import Item from '..'

test('renders learn react link', () => {
  const mockRepo = {
    id: '1234',
    name: 'test repo',
    git_url: 'https://github.com/Dcard',
    owner: {
      avatar_url: 'https://avatars.githubusercontent.com/u/11205485?s=200&v=4',
      login: 'Dcard'
    },
    watchers_count: 123,
    forks_count: 123,
    stargazers_count: 123,
    updated_at: '2022-04-21T04:03:03Z',
    description: 'this is description'
  }
  render(<Item repo={mockRepo} />)
  const linkElement = screen.getByRole('a')
  expect(linkElement).toHaveAttribute('src', 'https://github.com/Dcard')
})
