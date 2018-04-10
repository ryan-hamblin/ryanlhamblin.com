import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import '../about.css'

const GET_EVENTS = gql`
  {
    Event(id: "cjft6vd8lgafr0152umbzyca3") {
      id
      title
      date
      location
      image {
        url
      }
    }
  }
`

// /////////////////////////////////////////////////////////
// Actual container
const About = () => (
  <Query query={GET_EVENTS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`
      const { image, title } = data.Event
      return (
        <div>
          <h1>{title}</h1>
          <div className="image-wrapper">
            <img className="img" src={image.url} alt="prof" />
          </div>
        </div>
      )
    }}
  </Query>
)

export default About
