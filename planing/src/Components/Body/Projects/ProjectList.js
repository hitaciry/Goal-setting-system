import React, { Component } from 'react';
import style from '../../../style'
import ProjectDisplay from './ProjectDisplay'
class ProjectList extends Component {
  render() {
    return (
      <div style={style.ProjectList}>{
      this.props.projects!==undefined || this.props.projects.forEach(function(element) {
        <ProjectDisplay project={element}/>
      }, this)}

      </div>
    )
  }
}

export default ProjectList;