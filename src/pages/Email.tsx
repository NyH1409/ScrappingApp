import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Email: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Email Us</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" >Email Us</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTitle style={{textAlign: "center", marginTop: "50%", fontWeight: "bold", fontSize: "25px", color: "#1999d9", marginBottom: "3%"}}>Send Feedback</IonTitle>
        <IonInput placeholder='example@gmail.om' style={{border: "1px solid black", margin: "10px auto", width: "50%", borderRadius: "4px"}}></IonInput>
        <IonInput placeholder='*************' style={{border: "1px solid black", margin: "10px auto", width: "50%", borderRadius: "4px"}}></IonInput>
        <IonTextarea placeholder='Write your comment here...' style={{border: "1px solid black", margin: "10px auto", width: "50%", borderRadius: "4px"}} />
        <IonButton style={{margin: "0 40%", borderRadius: "4px"}}>send</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Email;
