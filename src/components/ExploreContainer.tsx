import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonSearchbar, useIonAlert } from '@ionic/react';
import axios from "axios";
import { addCircle, arrowBackCircle, arrowForwardCircle } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import { posts1, posts2, posts3, posts4, posts5, posts6, posts7 } from '../data/data';
import './ExploreContainer.css';


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = () => {

  
  const [desc, setDesc] = useState<boolean>(false);
  const [descbutton, setDescbutton] = useState<string>("More details");
  const [test, setTest] = useState<{title:string, company:string, contract:string, description:string, limit_date:string, }[]>([]);
  const [test2, setTest2] = useState<{title:string, company:string, contract:string, description:string, limit_date:string, }[]>([]);
  const [id, setId] = useState<number>(1);
  const ref = useRef<any>(null);
  const [ alertError ] = useIonAlert();
  useEffect(()=>{
    const promise = axios.get("http://wspc52.herokuapp.com/"+id);
    promise.then((response)=>{
      console.log(response);
      
      setTest(response.data.information);
      setTest2(response.data.information);
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
    console.log("Hello World");
    
    if(e.target.value === ""){
      setTest(test2)
    }
    else{
      const data = test.filter(elt => elt.title.includes(e.target.value));
      setTest(data);
    }
  }

  return (
    <>
      <div className="container">
        <IonSearchbar onIonChange={filterData} ref={ref}></IonSearchbar>
        {
          test.map((item:{title:string, company:string, contract:string, description:string, limit_date:string, }, index:number) => (
            <IonCard key = {index} className='content'>
              <IonCardHeader>
                <IonCardTitle className='title'>{item.title.toLocaleUpperCase()}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              <IonCardSubtitle className='company'>{item.company}</IonCardSubtitle>
                <IonCardSubtitle>{item.contract}</IonCardSubtitle>
                {
                  desc && <IonCardSubtitle>{item.description}</IonCardSubtitle>
                }
                <IonCardSubtitle>{item.limit_date}</IonCardSubtitle>
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
