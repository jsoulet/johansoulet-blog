import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Image = ({ src, alt = '', caption = '', align = 'fit', className = '', ...props }) => {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      <div className={cn('image box', className, align)} {...props}>
        <img src={src} alt={alt} />
        <div className="align-center">
          <em>{caption}</em>
        </div>
      </div>
    </a>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'fit', 'right']),
}

export default Image
