import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)

  return (
    <div class="container mx-auto">
        <header className='text-3xl font-bold uppercase'>{data.site.siteMetadata.title}</header>
        <nav className='flex justify-center bg-gray-500 '>
        <ul className='p-4 flex gap-4'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    <div class="flex justify-center items-center ">
      <main>
        <h1 >{pageTitle}</h1>
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout