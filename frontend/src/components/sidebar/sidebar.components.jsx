import React from "react";
import { Link } from "react-router-dom";
import {Aside,List} from './sidebar.styles'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CommuteIcon from '@material-ui/icons/Commute';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
export default class SideBar extends React.Component {
  render() {
    return (
      <Aside>
        <section>
          <div className="sidebar-menu">
            <List>
              <li>
                <div className="list-items">
                  <Link to="/clientes"><PeopleAltIcon/>clientes</Link>
                </div>
              </li>
              
              <li>
                <div className="list-items">
                  <Link to="/autos"><CommuteIcon/>autos</Link>
                </div>
              </li>
           

              <li>
                <div className="list-items">
                  <Link to="/reparaciones">
                    <PermDataSettingIcon/>reparaciones
                  </Link>
                </div>
              </li>
            </List>
          </div>
        </section>
      </Aside>
    );
  }
}
