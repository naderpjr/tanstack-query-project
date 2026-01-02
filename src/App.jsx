import './App.css'
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
}

function App() {

  const { data, isLoading, error } = useQuery({ queryKey: ['post'], queryFn: fetchPosts })

  if (isLoading) return <p> Loading...</p>
  if (error) return <p> Error occured: {error.message}</p>

  return (
    <>
      {data.map((post) => (
        <p>{post.title}</p>
      ))}
    </>
  )
}

export default App
