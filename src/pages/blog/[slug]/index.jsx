import SEO from '@/common/seo'
import BlogDetails from '@/components/blog-details'
import Wrapper from '@/layout/wrapper'
import React from 'react'

const BlogDeatils = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"ExpediChat - Data analytics"} />
            <BlogDetails />
        </Wrapper>
    )
}

export default BlogDeatils