import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import '../style.css'

const BgImage = ({className, imgProps, textClass}) => (
  <Link className={className} to='#'>
    <BackgroundImage
      Tag="section"
      role="img"
      className='bgImage'
      fluid={imgProps}
      backgroundColor={`#040e18`}
    >
      <div className='outer'>
        <h2 className={textClass}>How was the math test?</h2>
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
      <>
        <div className='container'>
          <div className='my-grid'>
            <BgImage className='un' textClass='small' imgProps={imgProps} />
            <BgImage className='du' textClass='small' imgProps={imgProps} />
            <BgImage className='twa' textClass='small' imgProps={imgProps} />
          </div>
          <div className='my-grid'>
            <BgImage className='un' textClass='big' imgProps={imgProps} />
            <BgImage className='du' textClass='big' imgProps={imgProps} />
            <BgImage className='twa' textClass='big' imgProps={imgProps} />
          </div>
        </div>



        <div className='container'>
          <div style={{width:'50%'}}>
            50% of screen, the grid div should probably autocomplete to be the size of the other 50%, but it only does when the textsize isn't 0.8em
          </div>
          <div className='my-grid'>
            <BgImage className='un' textClass='small' imgProps={imgProps} />
            <BgImage className='du' textClass='small' imgProps={imgProps} />
            <BgImage className='twa' textClass='small' imgProps={imgProps} />
          </div>
        </div>
      </>
    )
}

export default IndexPage
