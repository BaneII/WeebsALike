import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonText, IonButton } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>

          <IonItem>
            <IonLabel position="stacked">First Name <IonText color="danger">*</IonText></IonLabel>
            <IonInput required type="text"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Last Name <IonText color="danger">*</IonText></IonLabel>
            <IonInput required type="text"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">User Bio <IonText color="danger">*</IonText></IonLabel>
            <IonInput required type="text"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">User Tags<IonText color="danger">*</IonText></IonLabel>
            <IonInput required type="text"></IonInput>
          </IonItem>

          <IonItemDivider></IonItemDivider>

          <IonItem>
            <IonLabel position="stacked">Address</IonLabel>
            <IonInput placeholder="State"></IonInput>
            <IonInput placeholder="Zip Code"></IonInput>
          </IonItem>

          <IonItemDivider id="Space"></IonItemDivider>

          <div id="Submit">
            <IonButton expand="block" type="submit"   class="ion-no-margin">Save Changes</IonButton>
          </div>

        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
