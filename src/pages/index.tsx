import Head from "next/head"
import blob from '../content/home.md';
import matter from "gray-matter";

const Home = () => {

    const { data } = matter(blob);
    
    return (
          <article>
              {data.title}
          </article>
    )
}

export default Home;