import React from 'react'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { WindowLocation } from '@reach/router'

declare let __PATH_PREFIX__: string

const Header = styled.h1`
  ${tw`mb-6 sm:text-7xl text-5xl`};
`

const PostHeader = styled.h1`
  ${tw`mb-6 text-3xl `};
`

const PostHeaderLink = styled(Link)`
  ${tw`text-black hover:text-orange`};
`

const BlogContent = styled.div`
  ${tw`mx-auto max-w-lg py-6 px-6`};
`
const BlogMain = styled.main`
  a {
    ${tw`text-blue hover:text-orange`};
  }
`

type Data<LocationState = WindowLocation['state']> = {
  location: WindowLocation<LocationState>
  title: string
  children: React.ReactNode
}

const BlogLayout = ({ location, title, children }: Data) => {
  const rootPath = `${__PATH_PREFIX__}/blog`
  let header

  if (location.pathname === rootPath) {
    header = <Header>{title}</Header>
  } else {
    header = (
      <PostHeader>
        <PostHeaderLink to="/blog">{title}</PostHeaderLink>
      </PostHeader>
    )
  }
  return (
    <BlogContent>
      <header style={tw`text-center`}>{header}</header>
      <BlogMain>{children}</BlogMain>
    </BlogContent>
  )
}

export default BlogLayout
