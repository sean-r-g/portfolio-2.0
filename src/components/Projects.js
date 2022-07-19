import Table from 'react-bootstrap/Table'

const Projects = () => {

    return (


    <div class="table-container">
        <h2 id="project-title">My Work</h2>
        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>Application</th>
                <th>Overview</th>
                <th>Technologies</th>
                <th>Repositories</th>
            </tr>
        </thead>
        <tbody>
        <tr className='table-row'>
            <td><a class="project-link" href="https://trivializer-game.herokuapp.com/">Trivializer</a></td>
            <td>Trivializer is a free to play trivia game where users can create accounts, save high scores, and compare scores using the leaderboard</td>
            <td>PostgreSQL, Express.js, React, Node.js, Bootstrap</td>
            <td><a class="project-link" href="https://github.com/sean-r-g/CRUDApp1">GitHub Repo</a></td>
        </tr>
        <tr>
            <td><a class="project-link" href="https://immense-depths-20154.herokuapp.com/recipes/meat">Sean's Kitchen</a></td>
            <td>Sean's Kitchen is a hub for new and experiences home chefs to explore new recipes, add their own favorites, and edit exiting ones as necessary</td>
            <td>Express.js, EJS, MongoDB, Node.js</td>
            <td><a class="project-link" href="https://github.com/sean-r-g/CRUDApp1">GitHub Repo</a></td>
        </tr>
        <tr>
            <td><a class="project-link" href="https://real-estate-front-end12.herokuapp.com/">realitive</a></td>
            <td>realitive is an open forum for real estate enthusiasts, professionals, and casual viewers to post, browse, edit, and remove house and condo listings</td>
            <td>Mongoose ODM, Express.js, React, Node.js</td>
            <td>GitHub Repos (<a class="project-link" href="https://github.com/sean-r-g/realestate-front-end">Front End</a> & <a class="project-link" href="https://github.com/sean-r-g/realestate-back-end">Back End</a>)</td>
        </tr>
        {/* <tr><img className="table-pic" src="https://i.imgur.com/5NpZDX2.png"/></tr> */}
        <tr>
            <td><a class="project-link" href="https://diyfrontend.herokuapp.com/">HandyHome</a></td>
            <td>HandyHome is an open source DIY video guide platform where users can view, add, edit, and delete DIY videos in one central location</td>
            <td>Python, Django, React, Bootstrap</td>
            <td>GitHub Repos (<a class="project-link" href="https://github.com/sean-r-g/DIY-app-frontend">Front End</a> & <a class="project-link" href="https://github.com/sean-r-g/DIY-app-backend">Back End</a>)</td>
        </tr>
        {/* <img src="https://i.imgur.com/thrO43y.png"/> */}
        </tbody>
        </Table>
  </div>
        
    )
}

export default Projects