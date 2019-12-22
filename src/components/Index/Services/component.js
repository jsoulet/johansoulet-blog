import React from 'react'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'

const Services = () => {
  return (
    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>
            <FormattedMessage id="index.services.title" />
          </h2>
          <p>
            <FormattedMessage id="index.services.baseline" />
          </p>
        </header>
        <ul className="features">
          {['fa-code', 'fa-laptop', 'fa-paper-plane', 'fa-graduation-cap'].map(
            (iconClass, index) => {
              return (
                <li className={cn('icon solid', iconClass)} key={index}>
                  <h3>
                    <FormattedMessage id={`index.services.${index + 1}.title`} />
                  </h3>
                  <p>
                    <FormattedMessage id={`index.services.${index + 1}.details`} />
                  </p>
                </li>
              )
            }
          )}
        </ul>
      </div>
    </section>
  )
}

export default Services
