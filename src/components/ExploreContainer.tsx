import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonSearchbar, useIonAlert } from '@ionic/react';
import axios from "axios";
import { addCircle, arrowBackCircle, arrowForwardCircle } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import { posts } from '../data/data';
import './ExploreContainer.css';


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = () => {

  
  const [desc, setDesc] = useState<boolean>(false);
  const [descbutton, setDescbutton] = useState<string>("More details");
  const [test, setTest] = useState<{title:string, company:string, contrat:string, description:string, date:string, }[]>(posts);
  const [id, setId] = useState<number>(1);
  const ref = useRef<any>(null);
  const [ alertError ] = useIonAlert();
  useEffect(()=>{
    const promise = axios.get("http://wspc52.herokuapp.com/"+id);
    promise.then((response)=>{
      console.log(response);
      
      setTest(response.data.information);
    })
    .catch((err)=>{
      alertError({
        header: "No internet",
        message : "Internet is required to load data",
        buttons: ["OK"]
      })
    })
  }, [id])

  function showDesc():void {
    setDesc(!desc);
    if(descbutton === "More details"){
      setDescbutton("Less details");
    }
    else{
      setDescbutton("More details")
    }
  }

  function nextPage() {
    if(id === 100){
      document.documentElement.scrollTop = 0;
      setId(id)
    }
    else{
      document.documentElement.scrollTop = 0;
      setId(id+1)
    }
  }
  function prevPage() {
    if(id === 1){
      document.documentElement.scrollTop = 0;
      setId(id)
    }
    else{
      document.documentElement.scrollTop = 0;
      setId(id-1);
    }
  }

  function filterData(e:any) {
    if(e.target.value === ""){
      setTest(posts)
    }
    else{
      const data = posts.filter(elt => elt.title.includes(e.target.value));
      setTest(data);
    }
  }

  return (
    <>
      <div className="container">
        <IonSearchbar onIonChange={filterData} ref={ref}></IonSearchbar>
        {
          test.map((item:{title:string, company:string, contrat:string, description:string, date:string, }, index:number) => (
            <IonCard key = {index} className='content'>
              <IonCardHeader>
                <IonCardTitle className='title'>{item.title.toLocaleUpperCase()}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              <IonCardSubtitle className='company'>{item.company}</IonCardSubtitle>
                <IonCardSubtitle>{item.contrat}</IonCardSubtitle>
                {
                  desc && <IonCardSubtitle>{item.description}</IonCardSubtitle>
                }
                <IonCardSubtitle>{item.date}</IonCardSubtitle>
                <button className='details' onClick={showDesc}><IonIcon slot='start' md={addCircle} /> {descbutton}</button>
              </IonCardContent>
            </IonCard>
        ))
        }
        <div style={{margin: "2% 45%"}}>
          <IonIcon slot='start' md={arrowBackCircle} size="25px" onClick={prevPage}/>
          <IonIcon slot='start' md={arrowForwardCircle} onClick={nextPage}/>
        </div>
      </div>
    </>
  );
};

export default ExploreContainer;
