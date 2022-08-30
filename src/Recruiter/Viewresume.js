
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { API } from '../App';
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';



export function Viewresume(){
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const [pdfFile,setPdfFile] = useState([])
const {userid} = useParams();
console.log(userid);

const resume =async ()=>{
  await  fetch(`${API}/getresume/${userid}`).then(data=>data.json()).then((result)=>{setPdfFile(result.resume)})
}
useEffect(()=>{resume()},[])


    return(
        <div className="viewer">

        {/* render this if we have a pdf file */}
        {pdfFile&&(
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile}
            plugins={[defaultLayoutPluginInstance]}></Viewer>
          </Worker>
        )}

        {/* render this if we have pdfFile state null   */}
        {!pdfFile&&<>No file is selected yet</>}

      </div>

    )

}