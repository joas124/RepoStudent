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
  }, [query]);
  
  if(isRepo){
    return(
      <ThemeProvider theme={theme}>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" color={"primary"}>
          Search results:
        </Typography>
        <Demo>
          <List>
                {results != null ? results.map((result) => (
                  <OutlinedCard name={result.name} description={result.description} />
                )): <p>No results found</p> 
                }
          </List>
        </Demo>
      </Grid>
      </ThemeProvider>
    );
  }else{
    <div>
    <h1>Search Repo</h1>
    <div>
      {results && results.map((result) => (
        <div key={result.id}>
          <h2>{result.name}</h2>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  </div>
  }
  
}