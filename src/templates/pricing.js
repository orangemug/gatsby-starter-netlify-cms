import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const FooPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FooPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

const FooPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <FooPageTemplate
      title={post.frontmatter.title}
    />
  )
}

FooPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FooPage

export const aboutPageQuery = graphql`
  query FooPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
