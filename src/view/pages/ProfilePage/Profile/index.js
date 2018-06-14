import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle } from 'reactstrap';
import Socials from 'view/components/Socials';
import LanguagesList from './LanguagesList';
import PropTypes from 'prop-types';

const Profile = ({ profileData: { city, languages, social } }) => (
    <Card>
      <CardImg
        top 
        width="100%" 
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
      />
      <CardBody>
        { city && <CardSubtitle className="my-2">Город: { city }</CardSubtitle> }
        {
          languages && <LanguagesList languages={languages} />
        }
        {
          social && (
            <CardSubtitle className="my-2">
              Ссылки:
              <Socials socials={social}/>
            </CardSubtitle>
          )
        }
      </CardBody>
    </Card>
);

Profile.propTypes = {
  profileData: PropTypes.shape({
    city: PropTypes.string,
    languages: PropTypes.array,
    social: PropTypes.array
  })
};

export default Profile;