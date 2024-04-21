import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './folder.css'

export default function Folder(){

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
  const params = useParams();
  const repo = params.repo;
  const folderpath = params['*'];
  console.log(repo);
  console.log(folderpath);
  const [folder, setFolder] = useState(null);
  const history = useNavigate();
  
  async function fetchFolder(){
    try{
      let data = null;
      const response = await fetch(`http://localhost:8000/api/repo/${repo}/${folderpath}`);
      if(response.status === 404){
        console.log('Folder not found');
      }else if(response.status === 500){
        console.log('Server error');
      }else if(response.status === 200){
        const data = await response.json();
        setFolder(data);
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await fetchFolder();
    }
    fetchData();
  }, [folderpath]);

  console.log(folder);
  if(folder === null){
    return(
      <div className='folder'>
        <h1>Folder not found</h1>
      </div>
    );
  }else{
    const parentFolder = folderpath.substring(0, folderpath.lastIndexOf('/'));

    return(
      <div className='folderDiv'>
        <h1>Folder - {folder.name} </h1>
        <div className="folderContainer"> 
          <div className="folder-info">
            <a className='go-back' onClick={() => history(-1)}>Go Back</a>
            {folder.folders.map((folder, index) => {
              return(
                <div className="folder" key={index}>
                  <Link to={`./${folderpath}/${folder}`}>{folder}</Link>
                </div>
                );
            })}
            {folder.files.map((file, index) => {
              return(
                <div className="file">
                  <a className="file-anchor" onClick={() => downloadFile(folder.filesID[index], file)}>{file}</a>
                </div>
                );
            })}
          </div>
        </div>
      </div>
    );
  }

}