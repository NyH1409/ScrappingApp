import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { bookmark, bookmarkOutline, heartOutline, heartSharp, help, home, mail, person, search, settings, shareSocial, star, thumbsUp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Bookmarks',
    url: '/page/Bookmarks',
    iosIcon: bookmarkOutline,
    mdIcon: bookmark
  },
  {
    title: 'Favorites',
    url: '/page/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  }
];
const labels: AppPage[] = [
  {
    title: 'Rate App',
    url: '/page/Rate',
    iosIcon: star,
    mdIcon: star
  },
  {
    title: 'More Apps',
    url: '/page/More',
    iosIcon: search,
    mdIcon: search
  },
  {
    title: 'Send Feedback',
    url: '/page/Email',
    iosIcon: mail,
    mdIcon: mail
  },
  {
    title: 'Like Us',
    url: '/page/Like',
    iosIcon: thumbsUp,
    mdIcon: thumbsUp
  },
  {
    title: 'Share App',
    url: '/page/Share',
    iosIcon: shareSocial,
    mdIcon: shareSocial
  },
  {
    title: 'Settings',
    url: '/page/Settings',
    iosIcon: settings,
    mdIcon: settings
  },
  {
    title: 'About Us',
    url: '/page/About',
    iosIcon: person,
    mdIcon: person
  },
  {
    title: 'Help Center',
    url: '/page/Help',
    iosIcon: help,
    mdIcon: help
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Portal Job</IonListHeader>
          <IonNote>2.0.1</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          {labels.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
