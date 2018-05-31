import React from 'react'


const Content = ({products}) => {
  const htmlString = {product}
  return (
    <div>
      <p dangerouslySetInnerHTML={{__html: htmlString.product }}/>
        <p align="center">
          <a href="/" className="btn">
            Return to Home
          </a>
        </p>
      </div>
  )
}

export default Content
