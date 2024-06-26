import React from "react";
import { useSelector } from "react-redux";
import { Alert, AlertTitle, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import "./MyQuiz.css";
import { useDispatch } from "react-redux";
import { deleteQuiz, toggleActive } from "../../Redux/Action/ActionIndex"
import { useState } from "react";
import Error from "../../Assets/NoData.jpg";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { Delete, Edit, Visibility } from "@mui/icons-material";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(32px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
//React functional component named MyQuiz
const MyQuiz = () => {

  const dispatch = useDispatch();     //for dispatching action
  const [modal, setModal] = useState(false);  //for showing and hiding the delete modal
  const [deleteID, setDeleteID] = useState(); //for storing the id of the quiz to be deleted
  

  const handleDelete = (id) => {       //this function will execute when delete icon is clicked 

    setDeleteID(id);
    setModal(true);
  };

  const deleteYes = () => {            //this function will execute when yes button/option is clicked when delete warning Modal is shown
    dispatch(deleteQuiz(deleteID));
    setModal(false);
  };

  const toggleHandler=(id)=>{          //this function will execute when toggle buton is clicked
 
    dispatch(toggleActive(id))
  }

  const Quiz = useSelector((state) => state.reducer.quiz);   //for for getting the data stored in redux store

  
  return (
    <div className="whole" style={{ margin: "auto" }}>
      <div className="head">
        <h2>MY QUIZ</h2>
        <Button
          component={Link}
          to={"/create-quiz"}
          variant="contained"          
        >
          Create New quiz
        </Button>
      </div>
    
    {/*If modal is true then show the warning popup message*/}
      {modal === true ? (        
        <Dialog open={modal} onClose={() => setModal(false)}>
  <DialogTitle>Do you really want to delete this!?</DialogTitle>
  <DialogContent>
    <p>Deleting this would lead to permanent loss of the quiz.</p>
  </DialogContent>
  <DialogActions>
    <Button variant="contained" onClick={deleteYes}>Yes</Button>
    <Button variant="contained" onClick={() => setModal(false)} sx={{marginLeft: "10px"}}>No</Button>
  </DialogActions>
</Dialog>
      ) : (
        <div className="all-quiz-container">
          {Quiz.length === 0 ? (          //if there are no quiz then show this message else show the list of quizzes
            // <p style={{ color: "red",height:"150px" }}>Currently there are no quize!</p>
            <div>
          <Box>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={8}>
                <Paper className="paperStyle">
                  <Grid align="center">
                    <img src={Error} alt="" className="my-image" />
                  </Grid>
                  <Alert severity="error">
                    <AlertTitle>Oops!</AlertTitle>                    
                    <strong> You haven't created any quize to play</strong>
                  </Alert>
                  <hr className="hrStyle"></hr>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </div>
          ) : (
//             <div className="table">
//               <table>
//                 <thead>

//                 <tr className="tre tableHead">
//                   <th>Quiz No.</th>
//                   <th>Title</th>
//                   <th>Status</th>
//                   <th>Created On</th>
//                   <th>Actions</th>
//                 </tr>
              
//                 </thead>
//                 {Quiz.map((el, i) => (
//                   <tbody key={i}>
//                   <tr className="tre">
//                     <td >{i + 1}</td>
//                     <td className="ti">{el.title}</td>
//                   <td>
//                     {/* <button className="switch" style={{backgroundColor:`${el.isActive?"green":"grey"}`}}  onClick={()=>toggleHandler(el.id)} >{el.isActive?<span>Active</span>:<span>Inactive</span>}  </button> */}
//                     <IOSSwitch checked={el.isActive} onChange={() => toggleHandler(el.id)} />
// {el.isActive ? <span>Active</span> : <span>Inactive</span>}
//             </td>
//                     <td>
//                       {el.createdOn.getDate()}/{el.createdOn.getMonth()}/
//                       {el.createdOn.getFullYear()} {el.createdOn.getHours()}:
//                       {el.createdOn.getMinutes()}
//                     </td>
//                     <td>
//                       <Button
//                         variant="text"
//                         onClick={() => handleDelete(el.id)}
//                       >
//                         <DeleteIcon />
//                       </Button>
//                     </td>
//                   </tr>
//                   </tbody>
//                 ))}
//               </table>
//             </div>
<Box>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={12}>
<Paper className="paperStyles">
                    <TableContainer>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Quiz.No</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Created</TableCell>
                            <TableCell align="right">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                        {Quiz.map((el, i) => (
                            <TableRow key={i}>
                              <TableCell component="th" scope="row">
                              {i + 1}
                              </TableCell>
                              <TableCell align="right">
                              {el.title}
                              </TableCell>
                              <TableCell align="right">
                              <IOSSwitch checked={el.isActive} onChange={() => toggleHandler(el.id)} />
                                {el.isActive ? <span>Active</span> : <span>Inactive</span>}
                              </TableCell>
                              <TableCell align="right">
                              {el.createdOn.getDate()}/{el.createdOn.getMonth()}/
                              {el.createdOn.getFullYear()} {el.createdOn.getHours()}:
                              {el.createdOn.getMinutes()} 
                              </TableCell>
                              <TableCell align="right">
                                <Button ><Edit /> </Button>
                                <Button ><Visibility /></Button>                                
                                <Button variant="text" onClick={() => handleDelete(el.id)}><Delete /></Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Paper>
                  </Grid>
              </Grid>
            </Box>
          )}
        </div>
      )}
    </div>
  );
};

export default MyQuiz;