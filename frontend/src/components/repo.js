import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './repo.css'

export default function Repo(){

  function downloadFile(fileID, fileName){
    fetch(`http://localhost:8000/api/file/${fileID}`)
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Failed to download file');
        }
        // Return the blob from the response
        return response.blob();
      })
      .then(blob => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        // Simulate click on the link to trigger download
        link.click();
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  }

  const {repo} = useParams();
  const [project, setProject] = useState(null);
  
  async function fetchRepo(){
    try{
      let data = null;
      const response = await fetch(`http://localhost:8000/api/repo/${repo}`);
      if(response.status === 404){
        console.log('Repo not found');
      }else if(response.status === 500){
        console.log('Server error');
      }else if(response.status === 200){
        const data = await response.json();
        setProject(data);
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await fetchRepo();
    }
    fetchData();
  }, [repo]);

  console.log(project);
  if(project === null){
    return(
      <div className='repo'>
        <h1>Repo not found</h1>
      </div>
    );
  }else{
    return(
      <div className='repo'>
        <h1>Repo - {project.name} </h1>
        <div className="repoContainer"> 
          <div className="repo-info">
            <h2>Description: {project.description}</h2>
            <h2>Owner: {project.owner}</h2>
            {project.folders.map((folder, index) => {
              return(
                <div className="folder" key={index}>
                  <Link to={`./${folder}`}>{folder}</Link>
                </div>
                );
            })}
            {project.files.map((file, index) => {
              return(
                <div className="file" key={index}>
                  <a className="file-anchor" onClick={() => downloadFile(project.filesID[index], file)}>{file}</a>
                </div>
                );
            })}
          </div>
        </div>
      </div>
    );
  }

}