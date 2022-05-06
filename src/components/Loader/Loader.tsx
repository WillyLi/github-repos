import ContentLoader from 'react-content-loader'

const Loader = ({ count = 10 }: { count?: number }) => {
  const loaders = Array(count)
    .fill(undefined)
    .map((val, index) => (
      <ContentLoader
        viewBox="0 0 740 153"
        key={index}
        speed={1}
        backgroundColor={'#ddd'}
        foregroundColor={'#eee'}
      >
        <rect x="10" y="10" rx="5" ry="5" width="718" height="22" />
        <circle cx="23" cy="55" r="13" />
        <rect x="45" y="44" rx="5" ry="5" width="680" height="22" />
        <rect x="10" y="80" rx="5" ry="5" width="718" height="22" />
        <rect x="10" y="115" rx="10" ry="10" width="80" height="22" />
        <rect x="100" y="115" rx="10" ry="10" width="80" height="22" />
        <rect x="190" y="115" rx="10" ry="10" width="80" height="22" />
        <rect x="280" y="115" rx="10" ry="10" width="80" height="22" />
      </ContentLoader>
    ))
  return <div>{loaders}</div>
}

export default Loader
