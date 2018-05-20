import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle } from 'reactstrap';

const socialStyle = {
  width: 30,
  height: 30,
  borderRadius: '50%',
  lineHeight: '30px'
};

function ucfirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const Profile = ({ profileData: { city, languages, social } }) => {
  let socialSorted = [];
  if (social) {
    social.forEach((socialItem, index) => {
      if (socialItem.label === 'web') {
        const webSocial = social.splice(index, 1);
        socialSorted = [].concat(webSocial, social);
      }
    });
  }
  return(
    <Card>
      <CardImg
        top 
        width="100%" 
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
      />
      <CardBody>
        {
          city && <CardSubtitle className="my-2">Город: { city }</CardSubtitle>
        }
        {
          languages && (
            <CardSubtitle className="my-2">
              Знание языков: 
              {
                languages.map(language => 
                  <div key={language} className="pl-2 my-1">
                    <i className="fa fa-language"></i>
                    {'  '}
                    { language }
                  </div>
                )
              }
            </CardSubtitle>
          )
        }
        {
          social && (
            <CardSubtitle className="my-2">
              Ссылки:
              <div className="pl-2 d-inline-block">
                {
                   socialSorted.map(socialItem =>
                    <a 
                      key={socialItem.label}
                      href={socialItem.link} 
                      alt={socialItem.label}
                      title={ucfirst(socialItem.label)}
                      style={socialStyle}
                      target="_blank"
                      className="text-white bg-primary mx-1 d-inline-block text-center"
                    >
                      <i className={`fa fa-${socialItem.label === 'web' ? 'globe' : socialItem.label}`}></i>
                    </a>
                  )
                }
              </div>
            </CardSubtitle>
          )
        }
      </CardBody>
    </Card>
  );
};

export default Profile;