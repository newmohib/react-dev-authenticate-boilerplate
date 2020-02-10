import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MaterialTitlePanel from './material_title_panel';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const links = [];
  const githubDeployPath = process.env.GITHUB_DEPLOY_PATH
    ? process.env.GITHUB_DEPLOY_PATH
    : '';
  for (let ind = 0; ind < 10; ind++) {
    links.push(
      // <a key={ind} href="#" style={styles.sidebarLink}>
      //   Mock menu item {ind}
      // </a>
      <div key={ind} className="text-center">
        <NavLink
          key={ind}
          href="#"
          style={styles.sidebarLink}
          to={`${githubDeployPath}/dashboard`}
        >
          {' '}
          menu item {ind}
        </NavLink>
      </div>,
    );
  }

  return (
    <MaterialTitlePanel
      onSetSidebarOpen={props.onSetSidebarOpen}
      title="Menu"
      style={style}
    >
      <div style={styles.content}>
        <a href="index.html" style={styles.sidebarLink}>
          Home
        </a>
        <a href="responsive_example.html" style={styles.sidebarLink}>
          Responsive Example
        </a>
        <div style={styles.divider} />
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
