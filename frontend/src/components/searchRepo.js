import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import theme from './theme';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider } from "@mui/material/styles";
import OutlinedCard from "./projectCard";
import './searchRepo.css'


export default function SearchRepo(){
  
  const {query} = useParams();
  const [isRepo, setIsRepo] = useState(true);
  const [results, setResults] = useState(null);
  
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  async function fetchRepoUser(){
    try{
      let data = null;
      let response = null;
      if(isRepo){
        response = await fetch(`http://localhost:8000/api/search/repo/${query}`);
      }else{
        response = await fetch(`http://localhost:8000/api/search/user/${query}`);
      }
      if(response.status === 404){
        console.log(`No results found with name ${query}`);
      }else if(response.status === 500){
        console.log('Server error');
      }else if(response.status === 200){
        const data = await response.json();
        setResults(data);
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await fetchRepoUser();
    }
    fetchData();
  }, [query, isRepo]);
  
  if(isRepo){
    return(
      <ThemeProvider theme={theme}>
      <div className="search-select">
        <a className="search-selected">Repositories</a>
        <a onClick={() => setIsRepo(false)} className="search-not-selected">Users</a>
      </div>
      <Grid item xs={12} md={6}>
        <Typography sx={{ ml:4, mt: 4, mb: 2 }} variant="h6" component="div" color={"primary"} fontFamily={"Orbitron"}>
          Search results:
        </Typography>
        <Demo>
          <List className="cardflex">
            {results != null ? results.map((result) => (
              <div className="card">
                <OutlinedCard name={result.name} description={result.description} isRepo={isRepo} />
              </div>
              )): <p>No results found</p> 
            }
          </List>
        </Demo>
      </Grid>
      </ThemeProvider>
    );
  }else{
    console.log(results);
    return(
      <ThemeProvider theme={theme}>
      <div className="search-select">
        <a onClick={() => setIsRepo(true)} className="search-not-selected">Repositories</a>
        <a className="search-selected">Users</a>
      </div>
      <Grid item xs={12} md={6}>
        <Typography sx={{ ml:4, mt: 4, mb: 2 }} variant="h6" component="div" color={"primary"} fontFamily={"Orbitron"}>
          Search results:
        </Typography>
        <Demo>
          <List className="cardflex">
            {results != null ? results.map((result) => (
              <div className="card">
                <OutlinedCard name={result.name} username={result.user} description={result.description} isRepo={isRepo} />
              </div>
              )): <p>No results found</p> 
            }
          </List>
        </Demo>
      </Grid>
      </ThemeProvider>
    );
  }
  
}