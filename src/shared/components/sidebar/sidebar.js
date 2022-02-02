import React, { useState, useEffect } from 'react';
import './sidebar.scss';
import Logo from '../logo/logo';
import { ChevronDown, List } from 'react-bootstrap-icons';
import Height from '../height/height';
import CustomText from '../customtext/customtext';
import { colorScheme, sudoUserType } from '../../../default';
import { useMediaQuery } from 'react-responsive';
import { gridBreakpoints } from '../../../default';
import PullUp from '../pullup/pullup';
import { appPages } from '../../../router_service';
import { Link } from 'react-router-dom';
// import { userTypes } from '../../utils/userTypes';

function Sidebar({ ...props }) {
  const [minimize, setMinimize] = useState(false);

  const isSmallerThanLgScreen = useMediaQuery({ query: `(max-width: ${gridBreakpoints.lg})` });
  const isSmallerThanMdScreen = useMediaQuery({ query: `(max-width: ${gridBreakpoints.md})` });

  useEffect(() => {
    if (isSmallerThanLgScreen) {
      setMinimize(true);
    } else {
      setMinimize(false);
    }
    if (!isSmallerThanMdScreen) {
      props.setCols(props.defaultCols);
    }
  }, [isSmallerThanLgScreen, isSmallerThanMdScreen]);

  const toggleMinimize = () => {
    setMinimize(!minimize);
    if (!minimize) {
      if (isSmallerThanMdScreen) {
        props.setCols(props.defaultCols);
      } else {
        props.setCols({
          sidebarCol: 'col-0half paddingNone',
          mainCol: 'col-11half paddingNone',
        });
      }
    } else {
      if (isSmallerThanMdScreen) {
        props.setCols({
          sidebarCol: 'col-12 paddingNone',
          mainCol: 'paddingNone',
        });
      } else {
        props.setCols(props.defaultCols);
      }
    }
  };

  const checkPermission = permission => {
    if (permission == undefined) {
      return true;
    } else {
      if (permission.includes(sudoUserType)) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <div className="sidebar">
      <div className="inner-bar">
        <div className={`header`}>
          {/* {!minimize && <Logo width={100} className={`sidebar-logo`} />} */}
          <div className='sidebar-logo'>

          </div>
          <List
            size={35}
            color="black"
            className={`hoverPointer ${minimize && 'left adjust-menu-bar'}`}
            onClick={toggleMinimize}
          />
        </div>
        <Height val={7} />
        <div className='profile-holder'>
          <div className='name-circle'><span>Godson</span></div>
          <div className={`detail-holder ${minimize && 'd-none'}`}>
            <h4 className='position'>Developer</h4>
            <h5 className='name'>Nwankwo Godson</h5>
          </div>
          <div className={`caret-icon ${minimize && 'd-none'}`}>
            <ChevronDown size={20} color='black' />
          </div>
        </div>
        <div className="main">
          {!minimize ? (
            // <CustomText
            //   type="h3"
            //   size={minimize ? 12 : 13.5}
            //   color={colorScheme.sidebarSectionTitleColor}
            // >
            //   MAIN
            // </CustomText>
            <>
              <PullUp val={20} />
            </>
          ) : (
            <PullUp val={20} />
          )}
          <Height val={20} />

          {appPages.map(page => {
            if (page.sidebar) {
              if (!page.bottom) {
                if (checkPermission(page.permission)) {
                  return (
                    <>
                      <Link className="linkFree" to={!page.multiple && page.path}>
                        <div className={`option ${minimize && 'justify-content-center'}`}>
                          {page.icon}
                          {!minimize && <span>{page.label}</span>}
                          {page.label == 'Message' && <span className="messagesNum">10</span>}
                        </div>
                      </Link>
                    </>
                  );
                }
              }
            }
          })}
        </div>
        <Height val={minimize ? 9.8 : 14.5} />
        {/* <div className="settings">
          {!minimize ? (
            <CustomText
              type="h3"
              size={minimize ? 11.5 : 13.5}
              color={colorScheme.sidebarSectionTitleColor}
            >
              <span style={minimize ? { marginLeft: '-5.6px' } : {}}>
                {sudoUserType != userTypes.Admin ? 'NOTIFICATIONS' : 'SETTINGS'}
              </span>
            </CustomText>
          ) : (
            <PullUp val={9.5} />
          )}
          <Height val={20} />
          {appPages.map(page => {
            if (page.sidebar) {
              if (page.bottom) {
                if (checkPermission(page.permission)) {
                  return (
                    <>
                      <Link className="linkFree" to={!page.multiple && page.path}>
                        <div className="option">
                          {page.icon}
                          {!minimize && <span>{page.label}</span>}
                          {page.label == 'Message' && <span className="messagesNum">10</span>}
                        </div>
                      </Link>
                    </>
                  );
                }
              }
            }
          })}
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
