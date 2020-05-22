import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import '../style.css'

const BgImage = ({className, imgProps}) => (
  <Link className={className} to='#'>
    <BackgroundImage
      Tag="section"
      role="img"
      className='bgImage'
      fluid={imgProps}
      backgroundColor={`#040e18`}
    >
      <div className='outer'>
        <h2 className='articleTitle'>Some words here</h2>
      </div>
    </BackgroundImage>
  </Link>
)

const IndexPage = () => {

  const data = useStaticQuery( graphql`
      query MyQuery {
        allImageSharp {
          edges {
            node {
              fluid {
                sizes
                src
                srcSet
                srcSetWebp
              }
            }
          }
        }
      }
    `)

    const imgProps = data.allImageSharp.edges[2].node.fluid

    return (
      <div className='container'>
        <div className='beside'>Some text</div>
        <div className='my-grid'>
          <BgImage className='un' imgProps={imgProps} />
          <BgImage className='du' imgProps={imgProps} />
          <BgImage className='twa' imgProps={imgProps} />
        </div>
      </div>
    )
}

export default IndexPage
