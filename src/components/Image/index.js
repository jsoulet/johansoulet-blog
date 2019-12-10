import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Image = ({ children, alt = '', caption = '', align = 'fit', className = '', ...props }) => {
  return (
    <div className={cn('image box', className, align)} {...props}>
      {children}
      {caption && (
        <div className="align-center">
          <em>{caption}</em>
        </div>
      )}
    </div>
  )
}

Image.propTypes = {
  children: PropTypes.node.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'fit', 'right']),
}

export default Image
