import React from 'react';
import { IonContent } from '@ionic/react';

import './List.css';

interface ContainerProps {
  name: string;
}

const List: React.FC<ContainerProps> = ({ name }) => (
  <IonContent
    scrollEvents={true}
    onIonScrollStart={() => {}}
    onIonScroll={() => {}}
    onIonScrollEnd={() => {}}>
      <div>
        <h1>Fixed Content</h1>
        <h1>Fixed Content</h1>
        <h1>Fixed Content</h1>
        <h1>Fixed Content</h1>
      </div>
  </IonContent>
);



export default List;
