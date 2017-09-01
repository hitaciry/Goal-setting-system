import React, { Component } from 'react';
import style from '../../../style'
import ProjectDisplay from './ProjectDisplay'
class ProjectList extends Component {
  render() {
    return (
      <div style={style.ProjectDisplay}>
        <table>
          <tbody>
            <tr>
              <td>{this.props.Name}</td> 
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProjectList;