import React from 'react';
import { CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';

const LanguagesList = ({ languages }) => (
    <CardSubtitle className="my-2">
      Знание языков:
      {
        languages.map(language =>
            <div key={language} className="pl-2 my-1">
              <i className="fa fa-language"/>
              {'  '}
              { language }
            </div>
        )
      }
    </CardSubtitle>
);

LanguagesList.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LanguagesList;