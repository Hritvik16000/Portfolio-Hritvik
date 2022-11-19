import React from "react"
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileCopyIcon from '@mui/icons-material/FileCopy';

export default function Project(){
    return(
        <div className="project">
                <div className="card m-3 border-0">
                <div className="card-header border-0 card3"><h1>My Projects</h1></div>
                
            <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
            
  <div className="col">
    <div className="card h-100">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_fD69WAlWTpy9R1jC0HSjWDKNmhEemzU1g&usqp=CAU" 
      className="card-img-top" alt="AirBnb-clone"></img>
      <div className="card-body">
        <h5 className="card-title head">AirBnb-Clone</h5>
        <p className="card-text cont">Technologies used: HTML CSS Javascript React.js node.js</p>
        <p className="card-text cont">AirBnb clone this app is used to book hotels and hostels for travellers and wanderers</p>
      </div>
      <div className="card-footer">
      <div className="d-flex justify-content-between">
        <a href="https://cheerful-churros-0c6e30.netlify.app/" target="_blank"
        className="text-muted"><IconButton>
            <FileCopyIcon style={{color: "grey"}}/>
            </IconButton></a>
            <a href="https://github.com/Hritvik16000/Capstone-frontend" target="_blank"
            className="text-muted"><IconButton>
            <GitHubIcon style={{color: "grey"}}/>
            </IconButton></a>
      </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://cdn.neow.in/news/images/uploaded/2018/09/1537418720_keep_notes.jpg" 
      className="card-img-top" alt="keep-note"></img>
      <div className="card-body">
        <h5 className="card-title head">Keep-Note</h5>
        <p className="card-text cont">Technologies used: HTML CSS React js</p>
        <p className="card-text cont">In keep-note app you can note down the content and also you can delete it.</p>
      </div>
      <div className="card-footer">
      <div className="d-flex justify-content-between">
        <a href="https://whimsical-khapse-7c5b2a.netlify.app" target="_blank"
        className="text-muted"><IconButton>
            <FileCopyIcon style={{color: "grey"}}/>
            </IconButton></a>
            <a href="https://github.com/Hritvik16000/Notes-banao" target="_blank"
            className="text-muted"><IconButton>
            <GitHubIcon style={{color: "grey"}}/>
            </IconButton></a>
      </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://teatv.net/wp-content/uploads/2018/02/top-5-best-watch-movie-apps-for-android-at-the-moment-1.jpg" 
      className="card-img-top" alt="movie-app"></img>
      <div className="card-body">
        <h5 className="card-title head">Movie-App</h5>
        <p className="card-text cont">Technologies used: HTML CSS React js</p>
        <p className="card-text cont">In Movie-app you can add or delete the movie you want,you will 
        get movie details with trailer and you can like or dislike the movie</p>
      </div>
      <div className="card-footer">
      <div className="d-flex justify-content-between">
        <a href="https://vermillion-creponne-456934.netlify.app" target="_blank"
        className="text-muted"><IconButton>
            <FileCopyIcon style={{color: "grey"}}/>
            </IconButton></a>
            <a href="https://github.com/Hritvik16000/Movie-app-" target="_blank"
            className="text-muted"><IconButton>
            <GitHubIcon style={{color: "grey"}}/>
            </IconButton></a>
      </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://img.freepik.com/free-photo/young-woman-studying-library_1303-19014.jpg?w=2000" 
      className="card-img-top" alt="Library-app"></img>
      <div className="card-body">
        <h5 className="card-title head">Manage your Library</h5>
        <p className="card-text cont">Technologies used: HTML CSS Javascript</p>
        <p className="card-text cont">This app is a Library Management in which you keep records of the books in 
        library and the books that have been borrowed by the customers 
        and in case you want to add any new books.</p>
      </div>
      <div className="card-footer">
      <div className="d-flex justify-content-between">
        <a href="https://gleaming-syrniki-ada1de.netlify.app" target="_blank"
        className="text-muted"><IconButton>
            <FileCopyIcon style={{color: "grey"}}/>
            </IconButton></a>
            <a href="https://github.com/Hritvik16000/Day-32-Task-Library-Management-" target="_blank"
            className="text-muted"><IconButton>
            <GitHubIcon style={{color: "grey"}}/>
            </IconButton></a>
      </div>
      </div>
    </div>
    </div>
    </div>
</div>
        </div>
    )
}