import React from 'react'
import { FormattedMessage } from 'react-intl'

const Values = () => {
  return (
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <p>
            <FormattedMessage id="index.ikigai" />
          </p>
          <h2>
            <FormattedMessage id="index.ikigai.title" />
          </h2>
          <p>
            <FormattedMessage id="index.ikigai.firstSection" />
            <br />
            <br />
            <FormattedMessage id="index.ikigai.secondSection" /> <br />
            <FormattedMessage id="index.ikigai.thirdSection" />{' '}
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-seedling major style1">
              <span className="label">
                <FormattedMessage id="index.ikigai.values.1" />
              </span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-heart major style2">
              <span className="label">
                <FormattedMessage id="index.ikigai.values.1" />
              </span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">
                <FormattedMessage id="index.ikigai.values.1" />
              </span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Values
